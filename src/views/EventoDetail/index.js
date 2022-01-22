import { Layout } from "../../components/Layout";
import { Container } from "react-bootstrap";
import { CardEventoDetail } from "./cardEventoDetail";
import { Inscritos } from "./inscritos";



export function EventoDetailView() {
    return (
        <Layout>
            <Container>
                <CardEventoDetail />
                <Inscritos />
            </Container>
        </Layout>
    )
}