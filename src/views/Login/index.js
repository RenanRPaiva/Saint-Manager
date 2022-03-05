import { Container } from "react-bootstrap"
import styled from "styled-components"

export function LoginView() {
    return (
        <Background className="p-3 d-flex align-items-center">
            <Container className="bg-white rounded">
                <p>Login</p>
            </Container>
        </Background>
    )
}

const Background = styled.main`
  background: linear-gradient(100deg, #FFA451 0%, #FFC289 100%);
`