import { LayoutPortal } from "../../components/LayoutPortal";
import LogoT from '../../assets/img/Logo-saint-manager-transp.png'
import { Container } from "react-bootstrap";
import styled from "styled-components";

export function DashboardView() {
    return (
        <LayoutPortal>
            <ContainerStyled fluid>
                <h1>Bem vindo(a) Renan!</h1>
                <p>Utilize o menu lateral para gerenciar Saint Manager.</p>
            </ContainerStyled>
        </LayoutPortal>
    )
}

const ContainerStyled = styled(Container)`
    background-image: url(${LogoT});
    background-position: center;
    height: 600px;
    background-repeat: no-repeat;
    background-size: contain;
`