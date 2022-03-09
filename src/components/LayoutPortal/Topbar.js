import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from '../../assets/img/Logo-saint-manager.png'
import { logout } from "../../services/Users";
import { userLogout } from "../../store/User/actions";
import { selectUser } from "../../store/User/Selectors";

export function Topbar({ onOpen }) {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
        dispatch(userLogout())
        navigate('/portal/login')
    }
    return (
        <NavbarStyled expand="lg">
            <Container fluid>
                <Navbar.Toggle onClick={onOpen} />
                <Navbar.Brand as={Link} to="/portal">
                    <img src={Logo} alt="Logo Saint Manager" width={46.58} height={46.58} />
                </Navbar.Brand>
                <Nav>
                    <Dropdown align="end">
                        <Dropdown.Toggle variant="ligth"> 
                            {user.name}
                        </Dropdown.Toggle>
                        <Menu>
                            <Dropdown.Item onClick={handleLogout}>Sair</Dropdown.Item>
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

