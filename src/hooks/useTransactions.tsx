import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";


interface Transaction{
    id: number;
    title: string;
    amount: number;
    category: string;
    type: string;
    createdAt: string;
  }
type TransactionInput = Omit<Transaction, 'id'| 'createdAt'>;



interface TransactionsProviderProps{
    children: ReactNode
}

interface TransactionsContextData{
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData);


export function TransactionProvider({children}:TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  useEffect(() => {
    api
      .get("transactions/")
      .then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput){
      const res = await api.post("/transactions", 
      {
        ...transactionInput,
        createdAt: new Date()
      });
      const { transaction } = res.data;

      setTransactions([
          ...transactions,
          transaction,
        ])
  }

  return (<TransactionContext.Provider value={{transactions, createTransaction}}>
      {children}
  </TransactionContext.Provider>)
}

export function useTransaction(){
  const context = useContext(TransactionContext);
  return context
}