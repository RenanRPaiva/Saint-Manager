import { Layout } from "../../components/Layout";
import {Container} from "react-bootstrap";
import { CardEventoDetail } from "./cardEventoDetail";



export function EventoDetailView() {
    return (
        <Layout>
            <Container>
                <CardEventoDetail />           
                <h2>Formulário de Inscrição</h2>            
            </Container>
        </Layout>
    )
}