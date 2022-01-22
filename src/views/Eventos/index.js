import { Col, Container, Row } from "react-bootstrap";
import { CardEvento } from "../../components/CardEvento";
import { Layout } from "../../components/Layout";
import Jovem from "../../assets/img/Jovens.png";
import Irmas from "../../assets/img/Chá.jfif";
import Criança from "../../assets/img/Crianças.jfif";
import Churrasco from "../../assets/img/Churrasco.jfif";
import Oraçao from "../../assets/img/oração.jfif";
import Adolescente from "../../assets/img/adolescente.jfif"; 


const eventos = [
    {
        id: 1,
        image: Jovem,
        name: 'Culto Jovem',
        shortDescription: '1° Culto Jovem do ano! Seu presença é essencial, não esqueça da mascara!'
    },
    {
        id: 2,
        image: Irmas,
        name: 'Ela +',
        shortDescription: 'Chá do reencontro das irmãs! Não perca, trazer um prato de salgado ou doce!'
    },
    {
        id: 3,
        image: Churrasco,
        name: 'Churrasco!',
        shortDescription: 'Churrasco organizado pelo departamento de Homens.'
    },
    {
        id: 4,
        image: Adolescente,
        name: 'Culto dos Adolescentes',
        shortDescription: 'Culto dos adolescentes com todo o campo, não perca!'
    },
    {
        id: 5,
        image: Oraçao,
        name: 'Grupo de oração: De Joelhos',
        shortDescription: 'Grupo de oração matinal, venha!'
    },
    {
        id: 6,
        image: Criança,
        name: 'Crianças',
        shortDescription: 'Diversão para seu filho, com pausas para lanche e aprender  mais da biblia de forma divertida!'
    }
]

export function EventoView() {
    return (
        <Layout>
            <Container>
                <h1 className="text-center mt-4">Eventos</h1>
                <Row>
                    {eventos.map((evento) => (
                        <Col className="grid-eventos-item mb-3" xs={6} md={4} lg={3}>
                            <CardEvento evento={evento} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Layout>
    )
}