import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { createUser } from "../../services/Users";
import { userLogin } from "../../store/User/actions";

export function RegisterForm() {
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleChange = (event) => {
        const newFormData = { ...formData }
        const name = event.target.name
        newFormData[name] = event.target.value
        setFormData(newFormData)
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        try {
            event.preventDefault()
            setIsSubmiting(true)
            const userData = {
                ...formData
            }
           const createdUserData = await createUser(userData)
           const action = userLogin(createdUserData)
           dispatch(action)
           navigate('/portal')
        } catch (error) {
            if (error.message === 'Email already exists') {
                toast.error('Este e-mail já está em uso.')
            } else {
                toast.error('Falha ao se cadastrar. Tente novamente!')
            }
            setIsSubmiting(false)
        }
    }
    return (
        <>
            <h2>Cadastre-se:</h2>
            <Form onSubmit={handleSubmit} className='mb-4'>
                <Form.Group className="mb-3" controlId="register-name">
                    <Form.Label className="mb-0">Nome</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Informe seu nome"
                        required
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        className="opacity-75"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="register-email">
                    <Form.Label className="mb-0">E-mail</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="exemplo@exemplo.com"
                        required
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className="opacity-75"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="inscription-password">
                    <Form.Label className="mb-0">Senha</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Senha de acesso"
                        required
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        className="opacity-75"
                        minLength={4}
                    />
                </Form.Group>
                <Row>
                    <Col>
                        <Button type="submit" disabled={isSubmiting}>{isSubmiting ? 'Enviando...' : 'Criar Conta'}</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export const ButtonCard = styled(Button)`
    border-color: ${props => props.theme.mainColor} !important;
    background-color: ${props => props.theme.mainColor} !important;
    @media (max-width: 992px) {
        display: none;
    }  
`