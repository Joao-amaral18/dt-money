import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

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
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={closeNewTransactionModal}/>
      <GlobalStyles />
    </>
  );
}
