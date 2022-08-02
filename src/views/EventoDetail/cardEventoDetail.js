import { Col, Row } from "react-bootstrap";
import styled from "styled-components";




export function CardEventoDetail({ evento }) {

    return (
        <BannerCard className="shadow rounded">
            <Row className="mb-3">
                <Col lg={4}>
                    <img src={evento.image} alt={evento.name} className='w-100 rounded' />
                </Col>
                <Col lg={8} className="text-center pt-3">
                    <H1Styled>{evento.name}</H1Styled>
                    <p>{evento.shortDescription}</p>
                </Col>
            </Row>
            <div>
                <p className="text-center" ><u><b>Equipe Organizadora:</b></u></p>
                <p className="text-center">Departamento: {evento.depart}</p>
                <p className="text-center">Coordenador(a): {evento.coord.join(', ')}</p>
                <p className="text-center"><u><b>Equipe de Evento:</b></u></p>
                <p className="text-center">{evento.team.join(', ')}</p>
            </div>
            <div>
                <p className="text-center">Data: {evento.date} - {evento.time} - Local: {evento.local}</p>
                <p className="text-end">Lembre-se das medidas de prevenção ao COVID-19!</p>
            </div>
        </BannerCard>
    )
}

const BannerCard = styled.div`
    margin-top: 25px;
    margin-bottom: 25px;
    object-fit: cover;
`
const H1Styled = styled.h1`
   font-size: x-large;
`