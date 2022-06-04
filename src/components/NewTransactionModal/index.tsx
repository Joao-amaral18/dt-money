import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {

  const [type, setType] = useState('');

  
  return (
    <Modal
      overlayClassName="modal-overlay"
      className="react-modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <Container>
        <h2>Cadastrar Transação</h2>
        <button
          type="button"
          className="react-modal-close"
          onClick={onRequestClose}
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>
        <input type="text" placeholder="Titulo..." />
        <input type="number" placeholder="Valor..." />

        <TransactionTypeContainer>
          <RadioBox type="button"
          onClick={()=> setType('deposit')}
          isActive={type === 'deposit'}
          >

            <img src={incomeImg} alt="entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox type="button"
          onClick={()=> setType('withdraw')}
          isActive={type === 'withdraw'}
          >
            <img src={outcomeImg} alt="saída" />
            <span>Saída</span> 
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria..." />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
