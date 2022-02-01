import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ImgCard, ButtonCard } from "./styles";


export function CardEvento({ evento }) {
    return (
        <Card as='article' className="text-center shadow card-evento">
            <Card.Img variant="top" src={evento.image} alt={evento.name} width={'306px'} height={'139px'} className="rounded" />
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
                <Card.Img variant="top" src={evento.image} alt={evento.name} width={'306px'} height={'139px'} className="rounded" />
                <Card.Body>
                    <Card.Title>{evento.name}</Card.Title>
                    <Card.Text className="card-remove">{evento.shortDescription}</Card.Text>
                    <Button as={Link} to={`/eventos/${evento.id}`} className='btn-inscrever mb-3'>Inscreva-se!</Button>
                </Card.Body>
            </Card>
        </Col>

    ))

}

export const CardCustom = (props) => {
    return (
        <Card as='article' className="text-center h-100 d-flex flex-column">
            <Card.Header className="p-0">
                <ImgCard variant="top" src={props.imageSrc} alt={props.altImg} />
            </Card.Header>
            <Card.Body>                
                <Card.Title>{ props.title }</Card.Title>
                <Card.Text>{ props.description }</Card.Text>
                <ButtonCard onClick={props.onClickButton} >{ props.textButton }</ButtonCard>
            </Card.Body>
        </Card>
    )
}