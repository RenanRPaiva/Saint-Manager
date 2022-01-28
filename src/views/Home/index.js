import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import Banner from "../../assets/img/Cruz.jpg";
import OutrosEventos from "../../assets/img/Eventos.jfif";
import { Link } from "react-router-dom";
import { CardEventoHome } from "../../components/CardEvento";
import { useEffect, useState } from "react";




export function HomeView() {
  const [eventosHome, setEventosHome] = useState([])
  useEffect(() => {
      const promise = fetch('http://localhost:3001/eventos')
      promise.then((response) => {
          const promiseRes = response.json()
          promiseRes.then((data) => {
              setEventosHome(data)
          })
      })
  },
      [])
  return (
    <Layout>
      <Container>
        <Container>
          <Row className='shadow banner rounded'>
            <Col lg={4} className='rounded-left banner-img-col' >
              <img src={Banner} alt="Banner de Igreja" className='banner-img rounded' />
            </Col>
            <Col lg={8} className="p-10 banner-text">
              <h1 className='text-sm-start'>Venha  conhecer o Saint Manager!</h1>
              <p className='ps-3' >Membros podem se  inscrever a eventos,  visitas e saber muito mais!</p>
              <p className='text-center'>Fique sempre atento  as datas dos eventos, para não perder!</p>
              <p className='text-end'>Que Deus  abençoe a todos!  Volte Sempre!</p>
            </Col>
          </Row>
        </Container>
        <Row>
          <CardEventoHome evento={eventosHome} />
          <Col className="grid-eventos-item mb-3" xs={6} md={4} lg={3}>
            <Card as='article' className="text-center shadow card-evento">
              <Card.Img variant="top" src={OutrosEventos} alt='Outros Eventos' width={'306px'} height={'139px'} className="rounded" />
              <Card.Body>
                <Card.Title>Encontre Outros Eventos</Card.Title>
                <Button as={Link} to='/eventos' className='btn-inscrever mb-3'>Veja Mais!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </ Layout>
  )
}
