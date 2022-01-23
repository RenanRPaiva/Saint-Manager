import { Col, Row } from "react-bootstrap";




export function CardEventoDetail ({evento}) {
    
    return (
               <div className="shadow banner rounded">
            <Row className="mb-3">
                <Col>
                    <img src={evento.image} alt={evento.name} className='evento-detail rounded' />
                </Col>
                <Col className="banner-text text-center evento-text">
                    <h1 className="">{evento.name}</h1>
                    <p>{evento.shortDescription}</p>
                </Col>
            </Row>
            <div>
                <p className="text-center" ><u><b>Equipe Organizadora:</b></u></p>
                <p className="text-center">Departamento: {evento.depart}</p>
                <p className="text-center">Coordenador(a): {evento.coord}</p>
                <p className="text-center"><u><b>Equipe de Evento:</b></u></p>
                <p className="text-center">{evento.team}</p>
            </div>
            <div>
                <p className="text-center">Data: {evento.date} - {evento.time} - Local: {evento.local}</p>
                <p className="text-end evento-text-inf">Lembre-se das medidas de prevenção ao COVID-19!</p>
            </div>
        </div>
    )
}