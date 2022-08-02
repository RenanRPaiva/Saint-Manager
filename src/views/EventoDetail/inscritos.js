import { Alert, Table } from "react-bootstrap";

export function Inscritos({ inscriptions }) {
    return (
        <>
            <h2>Quem Vai?</h2>
            {inscriptions.length === 0 ? (
                <Alert variant="warning text-center">Seja o primeiro!</Alert>
            ) : (
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

            )}

        </>
    )
}