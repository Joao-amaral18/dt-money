import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyles } from "./styles/global";



export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function openNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function closeNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={openNewTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={closeNewTransactionModal}
      >
        <h1>Cadastrar Transação</h1>
      </Modal>
      <GlobalStyles />
    </>
  );
}
