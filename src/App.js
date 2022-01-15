import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Logo from './assets/img/Logo-saint-manager.png'

function App() {
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
  );
}

export default App;
