import { Layout } from "../../components/Layout";
import { Container } from "react-bootstrap";
import { CardEventoDetail } from "./cardEventoDetail";
import { Inscritos } from "./inscritos";
import Jovem from "../../assets/img/Jovens.png";

const evento = {
    id: 1,
    name: 'Culto Jovem',
    image: Jovem,
    shortDescription: '1° Culto Jovem do ano! Seu presença é essencial, não esqueça da mascara!',
    depart: 'Jovem',
    coord: 'John e Anna',
    team: 'Ellen, Cleber, João e José',
    date: '01/05/22',
    time: '19:00',
    local: 'Templo Principal',
    inscriptions: [
        {
            id: 1,
            name: 'Renan Paiva',
            email: 'renan17paiva@gmail.com',
        },
        {
            id: 2,
            name: 'João Silva',
            email: 'joaosilva@exeemplo.com',
        }
    ]
}


export function EventoDetailView() {
    return (
        <Layout>
            <Container>
                <CardEventoDetail evento={evento} />
                <Inscritos inscriptions={evento.inscriptions} />
            </Container>
        </Layout>
    )
}