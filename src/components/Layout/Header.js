import { Navbar, Container, Nav } from "react-bootstrap"
import Logo from '../../assets/img/Logo2.png'
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { selectIsUserLoggedIn } from '../../store/User/Selectors'

export function Header() {
    const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
    return (
        <header>
            <NavbarStyled expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={Logo} alt="Logo Saint Manager" width={70} height={70} />
                    </Navbar.Brand>
                    <NavbarTogglerStyled aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLinkStyled forwardedAs={Link} to="/eventos" className="m-2">Eventos</NavLinkStyled>
                            {isUserLoggedIn ? (
                                <NavLinkStyled forwardedAs={Link} to="/portal" className="m-2">Acessar Portal</NavLinkStyled>
                            ) : (
                                <NavLinkStyled forwardedAs={Link} to="/portal/login" className="m-2">Entrar</NavLinkStyled>
                            )}
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
    @media (min-width: 992px) {
        display: none;
    }     
    `
const NavbarTogglerStyled = styled(Navbar.Toggle)`
    background-color: #FFF;
    border: none;
`