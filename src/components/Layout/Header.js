import { Navbar, Container, Nav } from "react-bootstrap"
import Logo from '../../assets/img/Logo-saint-manager.png'
import { Link } from "react-router-dom"

export function Header() {
    return (
        <header>
            <Navbar expand="md" className='main-navbar'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={Logo} alt="Logo Saint Manager" width={46.58} height={46.58} />                       
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/eventos" className="m-2">Eventos</Nav.Link>
                            <Nav.Link as={Link} to="/login" className="m-2">Entrar</Nav.Link>
                            <Nav.Link as={Link} to="/" className='btn-remove m-2'>Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}