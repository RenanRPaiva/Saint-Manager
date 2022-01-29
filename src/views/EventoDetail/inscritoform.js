import { useState } from "react";
import { Button, Col, Form, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const initialValue = {
    name: '',
    email: '',
    password: ''
}
export function InscritoForm({ eventoId }) {
    const [generalError, setGeneralError] = useState()
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const [formData, setFormData] = useState(initialValue)
    const handleChange = (event) => {
        const newFormData = { ...formData }
        const name = event.target.name
        newFormData[name] = event.target.value
        setFormData(newFormData)
    }
    const handleSubmit = async (event) => {

        try {
            event.preventDefault()
            setIsSubmiting(true)
            setGeneralError(undefined)
            setShowSuccess(false)
            const body = {
                ...formData,
                eventoId: parseInt(eventoId)
            }
            await fetch('http://localhost:3001/inscriptions', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setShowSuccess(true)
            setFormData(initialValue)
        } catch {
            setGeneralError('Falha ao realizar inscrição. Tente novamente!')
        }
        setIsSubmiting(false)

    }
    return (
        <>
            <h2>Inscreva-se:</h2>
            {generalError && (
                <Alert variant="danger">{generalError}</Alert>
            )}
            {showSuccess && (
                <Alert variant="success">Inscrito com sucesso!</Alert>
            )}
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
                        <Button type="submit" disabled={isSubmiting}>{isSubmiting ? 'Enviando...' : 'Inscrever'}</Button>
                    </Col>
                    <Col>
                        <Button as={Link} to="/eventos" className='btn-inscrever btn-event-remove'>Outros eventos</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}