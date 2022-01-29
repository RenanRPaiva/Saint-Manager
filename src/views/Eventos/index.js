import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import { CardEvento } from "../../components/CardEvento";
import { Layout } from "../../components/Layout";

import { useEffect, useState } from "react";

export function EventoView() {
    const [loading, setLoading] = useState(true)
    const [eventos, setEventos] = useState([])
    const [generalError, setGeneralError] = useState()
    useEffect(() => {
        fetch('http://localhost:3001/eventos')
            .then(response => response.json())
            .then(data => {
                setEventos(data)                
            })
            .catch(() => {
                setGeneralError('Não foi possível listar os Eventos. Recarregue a página')                
            })
            .finally(() => {
                setLoading(false)
            })
    },
        [])
    return (
        <Layout>
            <Container>
                <h1 className="text-center mt-4">Eventos</h1>
                {generalError && (
                    <Alert variant="danger">{generalError}</Alert>
                )}
                {loading ? (
                    <div className="text-center">
                    <Spinner animation="border" role="status" variant="warning">
                      <span className="visually-hidden">Carregando...</span>
                    </Spinner>
                  </div>
                ) : (
                    <Row>
                        {eventos.map((evento, index) => (
                            <Col key={index} className="grid-eventos-item mb-3" xs={6} md={4} lg={3}>
                                <CardEvento evento={evento} />
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </Layout>
    )
}