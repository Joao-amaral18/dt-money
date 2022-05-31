import { Container } from "./style";

export function TransactionTable(){
    return (
        <Container>
            <table>
                <thead><tr>
                    <th>title</th>
                    <th>value</th>
                    <th>cat</th>
                    <th>date</th>
                    </tr></thead>
                    <tbody>
                        <tr>
                            <td>Dev2</td>
                            <td className="deposit">R$1000,00</td>
                            <td>Dev</td>
                            <td>29/05/22</td>
                        </tr>
                        <tr>
                            <td>Dev3</td>
                            <td className="withdraw">R$1000,00</td>
                            <td>Dev</td>
                            <td>30/05/22</td>
                        </tr>
                        <tr>
                            <td>Dev</td>
                            <td className="withdraw">R$1000,00</td>
                            <td>Dev</td>
                            <td>31/05/22</td>
                        </tr>
                    </tbody>
            </table>
        </Container>
    )
}