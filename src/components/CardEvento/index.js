import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


export function CardEvento({ evento }) {
    return (
        <Card as='article' className="text-center shadow card-evento">
            <Card.Img variant="top" src={evento.image} alt='Jovens' width={'306px'} height={'139px'} className="rounded" />
            <Card.Body>
                <Card.Title>{evento.name}</Card.Title>
                <Card.Text>{evento.shortDescription}</Card.Text>
                <Button as={Link} to={`/eventos/${evento.id}`} className='btn-inscrever mb-3'>Inscreva-se!</Button>
            </Card.Body>
        </Card>
    )
}

export function CardEventoHome({ evento }) {
    return evento.map((evento, index) => (
        <Col key={index} className="grid-eventos-item mb-3" xs={6} md={4} lg={3}>
            <Card as='article' className="text-center shadow card-evento">
                <Card.Img variant="top" src={evento.image} alt='Jovens' width={'306px'} height={'139px'} className="rounded"/>
                <Card.Body>
                    <Card.Title>{evento.name}</Card.Title>
                    <Card.Text className="card-remove">{evento.shortDescription}</Card.Text>
                    <Button as={Link} to={`/eventos/${evento.id}`} className='btn-inscrever mb-3'>Inscreva-se!</Button>
                </Card.Body>
            </Card>
        </Col>
    ))

}