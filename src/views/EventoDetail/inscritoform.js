import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export function InscritoForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })
    
    const handleChange = (event) => {
        const newFormData = {
            ...formData
        }
        newFormData[event.target.name] = event.target.value
        setFormData(newFormData)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('formData', formData)
    }
    return (
        <>
            <h2>Inscreva-se:</h2>
            <Form onSubmit={handleSubmit} className='mb-4'>
                <Form.Group className="mb-3" controlId="inscription-name">
                    <Form.Label className="mb-0">Nome</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Informe seu nome"
                        required
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="inscription-email">
                    <Form.Label className="mb-0">E-mail</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="exemplo@exemplo.com"
                        required
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
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
                    />
                </Form.Group>
                <Row>
                    <Col>
                        <Button type="submit">Inscrever</Button>
                    </Col>
                    <Col>
                        <Button as={Link} to="/eventos" className='btn-inscrever btn-event-remove'>Outros eventos</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}