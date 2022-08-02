import { LayoutPortal } from "../../components/LayoutPortal";
import LogoT from '../../assets/img/Logo-saint-manager-transp.png'
import styled from "styled-components";
import { PortalTitle } from "../../components/PortalTitle";
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/User/Selectors";



export function DashboardView() {
    const user = useSelector(selectUser)
    return (
        <LayoutPortal>
            <DivStyled>
                <PortalTitle>Bem vindo(a) {user.name}</PortalTitle>
                {user.type === 1 ? (
                    <p> Utilize o menu lateral para gerenciar Saint Manager.</p>
                ) : (
                    <Alert variant="info" className="opacity-75">Você também recebe um e-mail confimando a inscrição no evento.</Alert>
                )}
            </DivStyled>
        </LayoutPortal >
    )
}

const DivStyled = styled.div`
    background-image: url(${LogoT});
    background-position: center;
    height: 600px;
    background-repeat: no-repeat;
    background-size: contain;
`