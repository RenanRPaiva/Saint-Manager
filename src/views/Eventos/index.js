import { Col, Container, Row } from "react-bootstrap";
import { CardEvento } from "../../components/CardEvento";
import { Layout } from "../../components/Layout";

import { useEffect, useState } from "react";

export function EventoView() {
    const [eventos, setEventos] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/eventos')
            .then(response => response.json())
            .then(data => setEventos(data))
    },
        [])
    return (
        <Layout>
            <Container>
                <h1 className="text-center mt-4">Eventos</h1>
                <Row>
                    {eventos.map((evento, index) => (
                        <Col key={index} className="grid-eventos-item mb-3" xs={6} md={4} lg={3}>
                            <CardEvento evento={evento} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Layout>
    )
}