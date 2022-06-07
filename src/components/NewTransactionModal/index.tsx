import Modal from "react-modal";
import { useState, FormEvent } from "react";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("");

  function CreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    const data = {
      title,
      value,
      type,
      category,
    }

    api.post('/transactions', data)
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
        <input type="text" 
        value={title} 
        onChange={event => setTitle(event.target.value)}
        placeholder="Titulo..." />
        <input type="number" 
        value={value} 
        onChange={event => setValue(Number(event.target.value))}
        placeholder="Valor..." />

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

        <input type="text"
        value={category} 
        onChange={event => setCategory(event.target.value)} 
        placeholder="Categoria..." />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
