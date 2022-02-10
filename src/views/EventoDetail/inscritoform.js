import { useState } from "react";
import { Button, Col, Form, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { createInscription } from "../../services/Inscriptions.services.js";


const initialValue = {
    name: '',
    email: '',
    password: ''
}
export function InscritoForm({ eventoId, onRegister }) {
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
            const inscriptionData = {
                ...formData,
                eventoId: parseInt(eventoId)
            }
            await createInscription(inscriptionData)
            setShowSuccess(true)
            setFormData(initialValue)
            onRegister()
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
                        <ButtonCard forwardedAs={Link} to="/eventos">Outros eventos</ButtonCard>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export const ButtonCard = styled(Button)`
    border-color: ${props => props.theme.mainColor} !important;
    background-color: ${props => props.theme.mainColor} !important;
    @media (max-width: 768px) {
        display: none;
    }  
`