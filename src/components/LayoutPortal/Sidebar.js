import { CloseButton, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { SidebarItem } from "./sidebaritem";
import { selectUser } from "../../store/User/Selectors"

const menuItens = [
    {
        to: '/portal',
        text: 'Dashboard',
        checkAllPath: true,
        userTypes: [1, 2]
    },
    {
        to: '/portal/eventos',
        text: 'Eventos',
        checkAllPath:false,
        userTypes: [1] 
    },
    {
        to: '/',
        text: 'Ir para o site',
        checkAllPath: true,
        userTypes: [2]
    }
]

export function Sidebar({ onClose, isOpen }) {
    const user = useSelector(selectUser)
    return (
        <SidebarStyled isOpen={isOpen} className="d-flex flex-column p-3">
            <CloseButton className="ms-auto d-lg-none" onClick={onClose} />
            <p className="h1">Saint Manager</p>
            <hr />
            <Nav variant='pills' className="flex-column">
                {menuItens.filter(item => item.userTypes.includes(user.type)).map((item, index) => (
                   <SidebarItem  key={index} to={item.to} text={item.text} checkAllPath={item.checkAllPath} />
                ))}                
            </Nav>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.header`
  margin-top: 73px;
  background-color: ${props => props.theme.mainColor};
  margin-bottom: -25px;
  @media (max-width: 991px) {
      margin-top: auto;
      position: fixed;
      top:0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 999;
      margin-left: ${props => props.isOpen ? '0' : '-100%'};
      transition: all .3s;
    }
`