import { Navbar, Container, Button, Nav } from "react-bootstrap"
import Logo from '../../assets/img/Logo-saint-manager.png'
import { Link } from "react-router-dom"

export function Header() {
    return (
        <header>
            <Navbar expand="md" className='main-navbar'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <Button variant="link" href="/" className='main-navbar border-0'  > <img src={Logo} alt="Logo Saint Manager" width={46.58} height={46.58} />
                        </Button>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/eventos" className='btn-remove'>Eventos</Nav.Link>
                            <Nav.Link as={Link} to="/login">Entrar</Nav.Link>
                            <Nav.Link as={Link} to="/" className='btn-remove'>Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}