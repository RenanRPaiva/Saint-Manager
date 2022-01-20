import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import Banner from "../../assets/img/Cruz.jpg";
import Jovem from "../../assets/img/Jovens.png";
import Irmas from "../../assets/img/Chá.jfif";
import Criança from "../../assets/img/Crianças.jfif";
import OutrosEventos from "../../assets/img/Eventos.jfif"; 

export function HomeView() {
    return (
      <Layout>  
          <Container>
            <Container>
              <Row className='shadow banner rounded'>
                <Col lg={4} className='rounded-left banner-img-col' >
                  <img src={Banner} alt="Banner de Igreja" className='banner-img rounded-left' />
                </Col>
                <Col lg={8} className="p-10 banner-text">
                  <h1 className='text-sm-start'>Venha  conhecer o Saint Manager!</h1>
                  <p className='ps-3' >Membros podem se  inscrever a eventos,  visitas e saber muito mais!</p>
                  <p className='text-center'>Fique sempre atento  as datas dos eventos, para não perder!</p>
                  <p className='text-end'>Que Deus  abençoe a todos!  Volte Sempre!</p>
                </Col>
              </Row>
            </Container>
            <div className='row'>
              <div className='col-sm-3'>
                <Card style={{ width: '306px', height: '322px' }}>
                  <Card.Img variant="top" src={Jovem} alt='Jovens' width={'306px'} height={'139px'} />
                  <Card.Body>
                    <Card.Title>Culto Jovem</Card.Title>
                    <Card.Text className='card-remove'>
                      1° Culto Jovem do ano! Seu presença é essencial, não esqueça da mascara!
                    </Card.Text>
                    <Button className='btn-inscrever mb-3'>Inscreva-se!</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className='col-sm-3'>
                <Card style={{ width: '306px', height: '322px' }}>
                  <Card.Img variant="top" src={Irmas} alt='Irmas' width={'306px'} height={'139px'} />
                  <Card.Body>
                    <Card.Title>Elas +</Card.Title>
                    <Card.Text className='card-remove'>
                      Chá do reencontro das irmãs! Não perca, trazer um prato de salgado ou doce!
                    </Card.Text>
                    <Button className='btn-inscrever mb-3'>Inscreva-se!</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className='col-sm-3'>
                <Card style={{ width: '306px', height: '322px' }}>
                  <Card.Img variant="top card" src={Criança} alt='Crianças' width={'306px'} height={'139px'} />
                  <Card.Body>
                    <Card.Title>Crianças</Card.Title>
                    <Card.Text className='card-remove'>
                      Diversão para seu filho, com pausas para lanche e aprender  mais da biblia de forma divertida!
                    </Card.Text>
                    <Button className='btn-inscrever mb-3'>Inscreva-se!</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className='col-sm-3'>
                <Card style={{ width: '306px', height: '322px' }}>
                  <Card.Img variant="top" src={OutrosEventos} alt='Outros Eventos' width={'306px'} height={'139px'} />
                  <Card.Body>
                    <Card.Title>Encontre Outros Eventos</Card.Title>
                    <Button className='btn-inscrever mb-3'>Veja Mais!</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Container>        
      </ Layout>
    )
  }
  