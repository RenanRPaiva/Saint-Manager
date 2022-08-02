import { Container } from "react-bootstrap"
import styled from "styled-components"
import { AuthForm } from "../../components/AuthForm"
import LogoT from '../../assets/img/Logo-saint-manager-transp.png'


export function LoginView() {
    return (
        <Background className="p-3 d-flex align-items-center">
            <Container className="bg-white rounded p-3 p-md-5">
                <DivStyled>
                    <AuthForm />
                </DivStyled>
            </Container>
        </Background>
    )
}

const Background = styled.main`
  background: linear-gradient(100deg, #FFA451 0%, #FFC289 100%);
`
const DivStyled = styled.div`
    background-image: url(${LogoT});
    background-position: center;    
    background-repeat: no-repeat;
    background-size: contain;
 `