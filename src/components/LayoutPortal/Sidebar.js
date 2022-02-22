import { CloseButton, Nav } from "react-bootstrap";
import styled from "styled-components";
import { SidebarItem } from "./sidebaritem";

const menuItens = [
    {
        to: '/portal',
        text: 'Dashboard',
        checkAllPath: true
    },
    {
        to: '/portal/eventos',
        text: 'Eventos',
        checkAllPath:false
    }
]

export function Sidebar({ onClose, isOpen }) {
    return (
        <SidebarStyled isOpen={isOpen} className="d-flex flex-column p-3">
            <CloseButton className="ms-auto d-lg-none" onClick={onClose} />
            <p className="h1">Saint Manager</p>
            <hr />
            <Nav variant='pills' className="flex-column">
                {menuItens.map((item, index) => (
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