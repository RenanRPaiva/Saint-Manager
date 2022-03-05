import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";


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
    return (
        <>
            <h2>Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="inscription-email">
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