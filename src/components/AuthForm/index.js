import { Col, Row } from "react-bootstrap";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import styled from "styled-components"

export function AuthForm ( {redirectAfterLogin = true} ) {
    return (
        <Row>
            <Col xs={12} lg='auto' className="flex-fill">
            <LoginForm redirectAfterLogin={redirectAfterLogin} />
            </Col>
            <Divider xs={12} lg='auto' className='text-center my-3 align-self-center'>
            ou
            </Divider>
            <Col xs={12} lg='auto' className="flex-fill">
            <RegisterForm redirectAfterLogin={redirectAfterLogin} />
            </Col>
        </Row>
    )
}

const Divider = styled(Col)`
&:before, &:after {
    content: '';
    width: 30px;
    height: 1px;
    display: inline-block;
    background-color: #000;
    margin: 0 8px;
    vertical-align: middle;
}
@media (min-width: 992px){
    padding-left: 42px;
    padding-right: 42px;
    &::before, &::after{
        display: none;
    }
}
`