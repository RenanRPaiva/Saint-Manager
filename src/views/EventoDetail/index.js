import { Layout } from "../../components/Layout";
import { Alert, Container, Spinner } from "react-bootstrap";
import { CardEventoDetail } from "./cardEventoDetail";
import { Inscritos } from "./inscritos";
import { InscritoForm } from "./inscritoform";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { NotFoundView } from "../NotFound";
import { getEventoById } from "../../services/Eventos";

export function EventoDetailView() {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [evento, setEvento] = useState()
    const [generalError, setGeneralError] = useState()
    const fetchEventos = useCallback(
        async () => {
            try {
                const data = await getEventoById(id)
                setEvento(data)
                setLoading(false)
            } catch (error) {
                const message = error.message === 'Response not OK.' ? '404' : 'Não foi possível buscar o Evento. Recarregue a página.'
                setGeneralError(message)
                setLoading(false)
            }
        },
        [id]
    )
    useEffect(() => {
        setLoading(true)
        fetchEventos()
    }, [fetchEventos])
    const handleOnRegister = () => {
        fetchEventos()
    }
    if (loading) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" role="status" variant="warning">
                    <span className="visually-hidden">Carregando...</span>
                </Spinner>
            </div>
        )
    }
    if (generalError === '404') {
        return <NotFoundView />
    }
    return (
        <Layout>
            <Container>
                {generalError ? (
                    <Alert variant="danger" className="mt-4">{generalError}</Alert>) : (
                    <>
                        <CardEventoDetail evento={evento} />
                        <InscritoForm eventoId={id} onRegister={handleOnRegister} />
                        <Inscritos inscriptions={evento.inscriptions} />
                    </>
                )}

            </Container>
        </Layout>
    )
}