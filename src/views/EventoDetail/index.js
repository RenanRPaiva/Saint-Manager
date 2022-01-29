import { Layout } from "../../components/Layout";
import { Alert, Container, Spinner } from "react-bootstrap";
import { CardEventoDetail } from "./cardEventoDetail";
import { Inscritos } from "./inscritos";
import { InscritoForm } from "./inscritoform";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NotFoundView } from "../NotFound";

export function EventoDetailView() {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [evento, setEvento] = useState()
    const [generalError, setGeneralError] = useState()
    useEffect(() => {
        const fetchEventos = async () => {
            try {
                setLoading(true)
                const response = await fetch(`http://localhost:3001/eventos/${id}?_embed=inscriptions`)
                if (response.status === 404) {
                    throw new Error('404')
                }
                const data = await response.json()
                setEvento(data)
                setLoading(false)
            } catch (error) {
                const message = error.message === '404' ? '404' : 'Não foi possível buscar o Evento. Recarregue a página.'
                setGeneralError(message)
                setLoading(false)
            }
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
    if (generalError === '404'){
        return <NotFoundView />
    }
    return (
        <Layout>
            <Container>
                {generalError ? (
                    <Alert variant="danger" className="mt-4">{generalError}</Alert>) : (
                    <>
                        <CardEventoDetail evento={evento} />
                        <InscritoForm eventoId={id}/>
                        <Inscritos inscriptions={evento.inscriptions} />
                    </>
                )}

            </Container>
        </Layout>
    )
}