import { Navbar, Container, Nav } from "react-bootstrap"
import Logo from '../../assets/img/Logo-saint-manager.png'
import { Link } from "react-router-dom"
import styled from "styled-components"

export function Header() {
    return (
        <header>
            <NavbarStyled expand="md">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={Logo} alt="Logo Saint Manager" width={46.58} height={46.58} />
                    </Navbar.Brand>
                    <NavbarTogglerStyled aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLinkStyled forwardedAs={Link} to="/eventos" className="m-2">Eventos</NavLinkStyled>
                            <NavLinkStyled forwardedAs={Link} to="/login" className="m-2">Entrar</NavLinkStyled>
                            <NavLinkHomeStyled forwardedAs={Link} to="/" className='m-2'>Home</NavLinkHomeStyled>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </NavbarStyled>
        </header>
    )
}


const NavbarStyled = styled(Navbar)`
    background-color: ${props => props.theme.mainColor};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    padding-right: 20px;
`
const NavLinkStyled = styled(Nav.Link)`
    background-color: #FFF;
    border-radius: 3px;
    text-align: center;
    margin: 5px 0;
    box-shadow: 2px 2px 2px rgba(42, 69, 136, 0.3);
    `
const NavLinkHomeStyled = styled(Nav.Link)`
        background-color: #FFF;
        border-radius: 3px;
        text-align: center;
        margin: 5px 0;
        box-shadow: 2px 2px 2px rgba(42, 69, 136, 0.3);
    @media (min-width: 768px) {
        display: none;
    }    
}
        
    `
const NavbarTogglerStyled = styled(Navbar.Toggle)`
    background-color: #FFF;
    border: none;
`