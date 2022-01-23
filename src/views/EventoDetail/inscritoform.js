import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export function InscritoForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('name', name)
        console.log('email', email)
        console.log('password', password)
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
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="inscription-email">
                    <Form.Label className="mb-0">E-mail</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="exemplo@exemplo.com" 
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="inscription-password">
                    <Form.Label className="mb-0">Senha</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Senha de acesso" 
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
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