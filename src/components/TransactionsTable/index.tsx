import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionTable() {
  useEffect(() => {
    api
      .get("transactions/")
      .then(response => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>value</th>
            <th>cat</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dev2</td>
            <td className="deposit">R$100000,00</td>
            <td>Dev</td>
            <td>29/05/2022</td>
          </tr>
          <tr>
            <td>Dev3</td>
            <td className="withdraw">R$1000,00</td>
            <td>Dev</td>
            <td>30/05/2022</td>
          </tr>
          <tr>
            <td>Dev</td>
            <td className="withdraw">R$1000,00</td>
            <td>Dev</td>
            <td>31/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
