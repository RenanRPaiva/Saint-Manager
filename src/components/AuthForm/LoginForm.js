import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../services/Users";


export function LoginForm() {
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [formData, setFormData] = useState({
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
        event.preventDefault()
        try {
            setIsSubmiting(true)
            const userData = await login(formData)
            console.log('userData', userData)
            const action = {
                type: 'USER_LOGIN',
                payload: userData
            }
            dispatch(action)
            navigate('/portal')
        } catch (error) {
            const message = error.message === 'Credentials invalid.'
            ? 'E-mail ou senha inválidos.'
            : 'Falha ao fazer login. Tente Novamente.'
            toast.error(message)
            setIsSubmiting(false)
        }
    }
    return (
        <>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="login-email">
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
                <Form.Group className="mb-3" controlId="login-password">
                    <Form.Label className="mb-0">Senha</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Senha de acesso"
                        required
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        className="opacity-75"
                    />
                </Form.Group>
                <Row>
                    <Col>
                        <Button type="submit" disabled={isSubmiting}>{isSubmiting ? 'Enviando...' : 'Entrar'}</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}