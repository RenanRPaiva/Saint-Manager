import { Alert, Col, Container, Row } from "react-bootstrap";
import { CardCustom } from "../../components/CardEvento";
import { Layout } from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEventos } from "../../services/Eventos";
import { Loading } from "../../components/Loading";

export function EventoView() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [eventos, setEventos] = useState([])
    const [generalError, setGeneralError] = useState()
    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const data = await getEventos()
                setEventos(data)
            } catch {
                setGeneralError('Não foi possível listar os Eventos. Recarregue a página')
            }
            setLoading(false)
        }
        fetchEventos()
    }, [])
    const redirectEvento = (id) => {
        navigate(`/eventos/${id}`)
    }
    return (
        <Layout>
            <Container>
                <h1 className="text-center mt-4">Eventos</h1>
                {generalError && (
                    <Alert variant="danger">{generalError}</Alert>
                )}
                {loading ? (
                    <Loading />
                ) : (
                    <Row>
                        {eventos.map((evento, index) => (
                            <Col key={index} className="grid-eventos-item mb-3" xs={6} md={4} lg={3}>
                                <CardCustom
                                    imageSrc={evento.image}
                                    altImg={evento.name}
                                    title={evento.name}
                                    description={evento.shortDescription}
                                    textButton='Inscreva-se!'
                                    onClickButton={() => redirectEvento(evento.id)}
                                />
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </Layout>
    )
}