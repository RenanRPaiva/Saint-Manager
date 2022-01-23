import { Table } from "react-bootstrap";

export function Inscritos({ inscriptions }) {
    return (
        <>
            <h2>Formulário de Inscrição</h2>

            <h2>Quem Vai?</h2>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {inscriptions.map((inscription) => (
                        <tr key={inscription.id}>
                            <td>{inscription.id}</td>
                            <td>{inscription.name}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </>
    )
}