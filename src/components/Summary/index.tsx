import { useContext } from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransaction } from "../../hooks/useTransactions";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransaction();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposit += transaction.amount;
        acc.total += transaction.amount;
      } else if (transaction.type === "withdraw") {
        acc.withdraw -= transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    }
  );
  return (
    <Container>
      {/* <TransactionContext.Consumer>
               {(data) => {
                   console.log(data)
                   return <p>ok</p>
               }}
           </TransactionContext.Consumer> */}

      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposit)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraw)}
        </strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
