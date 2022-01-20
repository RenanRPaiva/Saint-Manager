import { Button, Container, Nav, Navbar, Card, Col, Row } from 'react-bootstrap'
import Logo from './assets/img/Logo-saint-manager.png'
import Banner from './assets/img/Cruz.jpg'
import Jovem from './assets/img/Jovens.png'
import Irmas from './assets/img/Chá.jfif'
import Criança from './assets/img/Crianças.jfif'
import OutrosEventos from './assets/img/Eventos.jfif'

function Header() {
  return (
    <header>
      <Navbar expand="md" className='main-navbar'>
        <Container>
          <Navbar.Brand href="/">
            <Button variant="link" href="/" className='main-navbar border-0'  > <img src={Logo} alt="Logo Saint Manager" width={46.58} height={46.58} />
            </Button>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className='btn-remove'>Home</Nav.Link>
              <Nav.Link href="/eventos" className='btn-remove'>Eventos</Nav.Link>
              <Nav.Link href="/login">Entrar</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

function Footer() {
  return (
    <footer className='text-center footer'>
      <p className='m-0'>Todos os direitos reservados ao Saint Manager!</p>
    </footer>
  )
}

function Layout ({ children }){
  return (
    <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
    </>    
  )
}

function HomeView() {
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

function NotFoundView (){
  return(
    <Layout>   
    <h1>Página não encontrada!</h1>      
    </ Layout>
  )
}
function App() {
  return (
    <HomeView />
  );
}

export default App;
