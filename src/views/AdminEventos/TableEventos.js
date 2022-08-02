import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export function TableEventos({ eventos, onClickDelete }) {
    return (
        <Table striped hover responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Departamento</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {eventos.length === 0  ? (
                    <tr>
                        <td colSpan={4} className='text-center'>Nenhum evento encontrado.</td>
                    </tr>
                ) : eventos.map((evento) => (
                    <tr key={evento.id}>
                        <td>{evento.id}</td>
                        <td>{evento.name}</td>
                        <td>{evento.depart}</td>
                        <td className="d-grid gap-1 d-sm-table-cell">
                            <Button size="sm" as={Link} to={`/portal/eventos/${evento.id}`}>Editar</Button>
                            <Button size="sm" variant="danger" className="ms-sm-1" onClick={() => onClickDelete(evento)}>Excluir</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}