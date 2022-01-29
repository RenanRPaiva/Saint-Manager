import { Layout } from "../../components/Layout";
import { Container, Spinner } from "react-bootstrap";
import { CardEventoDetail } from "./cardEventoDetail";
import { Inscritos } from "./inscritos";
import { InscritoForm } from "./inscritoform";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function EventoDetailView() {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [evento, setEvento] = useState()
    useEffect(() => {
        const fetchEventos = async () => {
            const response = await fetch(`http://localhost:3001/eventos/${id}?_embed=inscriptions`)
            const data = await response.json()
            setEvento(data)
            setLoading(false)
        }
        fetchEventos()
    }, [id])
    if (loading) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" role="status" variant="warning">
                    <span className="visually-hidden">Carregando...</span>
                </Spinner>
            </div>
        )
    }
    return (
        <Layout>
            <Container>
                <CardEventoDetail evento={evento} />
                <InscritoForm />
                <Inscritos inscriptions={evento.inscriptions} />
            </Container>
        </Layout>
    )
}