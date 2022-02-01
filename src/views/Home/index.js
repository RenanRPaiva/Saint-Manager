import { Alert, Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import Banner from "../../assets/img/Cruz.jpg";
import OutrosEventos from "../../assets/img/Eventos.jfif";
import { Link, useNavigate } from "react-router-dom";
import { CardEventoHome } from "../../components/CardEvento";
import { useEffect, useState } from "react";
import { CardCustom } from "../../components/CardEvento";





export function HomeView() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [eventosHome, setEventosHome] = useState([])
  const [generalError, setGeneralError] = useState()
  useEffect(() => {
    fetch('http://localhost:3001/eventos')
      .then(response => response.json())
      .then(data => {
        setEventosHome(data)
      })
      .catch(() => {
        setGeneralError('Não foi possível listar os Eventos. Recarregue a página.')
      })
      .finally(() => {
        setLoading(false)
      })
  },
    [])
  const threeEventos = eventosHome.slice(0, 3)

  const redirectEvento = (id) => {
    navigate(`/eventos/${id}`)
  }
  return (
    <Layout>
      <Container>
        <Container className="bannerCont">
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
        {generalError && (
          <Alert variant="danger">{generalError}</Alert>
        )}
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" role="status" variant="warning">
              <span className="visually-hidden">Carregando...</span>
            </Spinner>
          </div>
        ) : (
          <Row>
            {threeEventos.map((evento, index) => {
              return (
                <Col key={index} className="grid-eventos-item mb-3 " xs={6} md={4} lg={3}>
                  <CardCustom
                    imageSrc={evento.image}
                    altImg={evento.name}
                    title={evento.name}
                    description={evento.shortDescription}
                    textButton='Inscrever'
                    onClickButton={() => redirectEvento(evento.id)}
                  />
                </Col>
              )
            })}
            <Col className="grid-eventos-item mb-3" xs={6} md={4} lg={3}>
              <Card as='article' className="text-center card-evento">
                <Card.Img variant="top" src={OutrosEventos} alt='Outros Eventos' width={'306px'} height={'139px'} className="rounded" />
                <Card.Body>
                  <Card.Title>Encontre Outros Eventos</Card.Title>
                  <Button as={Link} to='/eventos' className='btn-inscrever mb-3'>Veja Mais!</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </ Layout>
  )
}
