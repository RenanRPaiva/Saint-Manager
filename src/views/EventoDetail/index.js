import { Layout } from "../../components/Layout";
import { Container } from "react-bootstrap";
import { CardEventoDetail } from "./cardEventoDetail";
import { Inscritos } from "./inscritos";
import { InscritoForm } from "./inscritoform";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function EventoDetailView() {
    const { id } = useParams()
    const [evento, setEvento] = useState()
    useEffect(() => {
        const fetchEventos = async () => {
            const response = await fetch(`http://localhost:3001/eventos/${id}?_embed=inscriptions`)
            const data = await response.json()
           setEvento(data)
        }       
        fetchEventos()
    }, [id])
    if (!evento){
        return null
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