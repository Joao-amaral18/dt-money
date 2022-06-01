import logoImg from '../../assets/logo.svg';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
  }

export function Header({onOpenNewTransactionModal}:HeaderProps) {

    return (
        <Container>
            
           <Content>
               <img src={logoImg} alt="dt money" />
                <button onClick={onOpenNewTransactionModal} type="button">
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}