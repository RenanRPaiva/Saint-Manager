import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from '../../assets/img/Logo-saint-manager.png'

export function Topbar({ onOpen }) {
    return (
        <NavbarStyled expand="md">
            <Container fluid>
                <Navbar.Toggle onClick={onOpen} />
                <Navbar.Brand as={Link} to="/">
                    <img src={Logo} alt="Logo Saint Manager" width={46.58} height={46.58} />
                </Navbar.Brand>
                <Nav>
                    <Dropdown align="end">
                        <Dropdown.Toggle variant="ligth"> 
                            Renan
                        </Dropdown.Toggle>
                        <Menu>
                            <Dropdown.Item>Sair</Dropdown.Item>
                        </Menu>
                    </Dropdown>
                </Nav>
            </Container>

        </NavbarStyled>
    )
}


const NavbarStyled = styled(Navbar)`
    background-color: ${props => props.theme.mainColor};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
   `

const Menu = styled(Dropdown.Menu)`
     position: absolute !important;
`

