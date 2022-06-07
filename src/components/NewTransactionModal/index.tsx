import Modal from "react-modal";
import { useState, FormEvent, useContext } from "react";
import { api } from "../../services/api";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { useTransaction } from "../../hooks/useTransactions";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransaction();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");

  async function CreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("");
    onRequestClose();
  }

  return (
    <Modal
      overlayClassName="modal-overlay"
      className="react-modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <Container onSubmit={CreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <button
          type="button"
          className="react-modal-close"
          onClick={onRequestClose}
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Titulo..."
        />
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
          placeholder="Valor..."
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor={"green"}
          >
            <img src={incomeImg} alt="entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor={"red"}
          >
            <img src={outcomeImg} alt="saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          placeholder="Categoria..."
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
