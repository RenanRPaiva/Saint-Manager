import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Logo from './assets/img/Logo-saint-manager.png'

function App() {
  return (
    <Navbar expand="md" className= 'main-navbar'>
      <Container>
        <Navbar.Brand href="#home">
         <Button variant="link" href="#link" className='main-navbar border-0'  > <img src={Logo} alt= "Logo Saint Manager" width={46.58} height={41}/>
         </Button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#link" className='btn-remove'>Home</Nav.Link>
            <Nav.Link href="#link" className='btn-remove'>Eventos</Nav.Link>
            <Nav.Link href="#link">Entrar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
