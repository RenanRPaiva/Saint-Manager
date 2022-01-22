import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


export function CardEvento({ evento }) {
    return (
        <Card as='article' className="text-center shadow card-evento">
            <Card.Img variant="top" src={evento.image} alt='Jovens' width={'306px'} height={'139px'} />
            <Card.Body>
                <Card.Title>{evento.name}</Card.Title>
                <Card.Text>{evento.shortDescription}</Card.Text>
                <Button as={Link} to={`/eventos/${evento.id}`} className='btn-inscrever mb-3'>Inscreva-se!</Button>
            </Card.Body>
        </Card>
    )
}

export function CardEventoHome({ eventoHome }) {
    return (
        <Card as='article' className="text-center shadow card-evento">
            <Card.Img variant="top" src={eventoHome.image} alt='Jovens' width={'306px'} height={'139px'} />
            <Card.Body>
                <Card.Title>{eventoHome.name}</Card.Title>
                <Card.Text className="card-remove">{eventoHome.shortDescription}</Card.Text>
                <Button as={Link} to={`/eventos/${eventoHome.id}`} className='btn-inscrever mb-3'>Inscreva-se!</Button>
            </Card.Body>
        </Card>
    )
}