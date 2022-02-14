import { CloseButton, Nav } from "react-bootstrap";
import styled from "styled-components";
import { SidebarItem } from "./sidebaritem";

const menuItens = [
    {
        to: '/portal',
        text: 'Dashboard'
    },
    {
        to: '/portal/cursos',
        text: 'Eventos'
    }
]

export function Sidebar({ onClose, isOpen }) {
    return (
        <SidebarStyled isOpen={isOpen} className="d-flex flex-column p-3">
            <CloseButton className="ms-auto" onClick={onClose} />
            <p className="h1">Saint Manager</p>
            <hr />
            <Nav variant='pills' className="flex-column">
                {menuItens.map((item, index) => (
                   <SidebarItem  key={index} to={item.to} text={item.text} />
                ))}                
            </Nav>
        </SidebarStyled>
    )
}

// display: ${props => props.isOpen ? 'flex' : 'none'};
const SidebarStyled = styled.header`
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.mainColor};
  z-index: 999;
  margin-left: ${props => props.isOpen ? '0' : '-100%'};
  transition: all .3s;
`