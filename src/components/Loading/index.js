import { Spinner } from "react-bootstrap";

export function Loading () {
    return (
        <div className="text-center">
            <Spinner animation="border" role="status" variant="warning">
                <span className="visually-hidden">Carregando...</span>
            </Spinner>
        </div>
    )
}