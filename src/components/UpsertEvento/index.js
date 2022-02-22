import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const emptyState = {
    name: '',
    depart: '',
    coord: '',
    shortDescription: '',
    team: '',
    date: '',
    time: '',
    local: '',
    image: ''
}

export function UpsertEvento({ onSubmit, buttonLabel = 'Cadastrar', initialState = emptyState }) {
    const [formData, setFormData] = useState(initialState)
    const handleChange = (event) => {
        const { value, name } = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(formData)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="evento-name">
                <Form.Label className="mb-0">Nome</Form.Label>
                <Form.Control
                    placeholder="Nome do evento"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    name='name'
                    maxLength={45}
                />
                {formData.name.length}/45 Max.
            </Form.Group>
            <Form.Group className="mb-3" controlId="evento-shortDescription">
                <Form.Label className="mb-0">Descrição</Form.Label>
                <Form.Control
                    as='textarea'
                    placeholder="Descrição curta do evento"
                    required
                    value={formData.shortDescription}
                    onChange={handleChange}
                    name='shortDescription'
                    maxLength={100}
                />
                {formData.shortDescription.length}/100 Max.
            </Form.Group>
            <Form.Group className="mb-3" controlId="evento-depart">
                <Form.Label className="mb-0">Departamento</Form.Label>
                <Form.Control
                    placeholder="Nome do departamento"
                    required
                    value={formData.depart}
                    onChange={handleChange}
                    name='depart'
                    maxLength={45}
                />
                {formData.depart.length}/45 Max.
            </Form.Group>
            <Form.Group className="mb-3" controlId="evento-coord">
                <Form.Label className="mb-0">Coordenador(a)</Form.Label>
                <Form.Control
                    placeholder="Nome do coordenador(a) do departamento"
                    required
                    value={formData.coord}
                    onChange={handleChange}
                    name='coord'
                    maxLength={45}
                />
                {formData.coord.length}/45 Max.
            </Form.Group>
            <Form.Group className="mb-3" controlId="evento-team">
                <Form.Label className="mb-0">Membros de equipe</Form.Label>
                <Form.Control
                    placeholder="Nome dos membros da equipe organizadora do evento"
                    required
                    value={formData.team}
                    onChange={handleChange}
                    name='team'
                    maxLength={45}
                />
                {formData.team.length}/45 Max.
            </Form.Group>
            <div className=" d-flex flex-colum gap-3">
                <Form.Group className="mb-3" controlId="evento-date">
                    <Form.Label className="mb-0">Data</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="Data do evento"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        name='date'
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="evento-time">
                    <Form.Label className="mb-0">Horário</Form.Label>
                    <Form.Control
                        type="time"
                        placeholder="Horário do evento"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        name='time'
                    />
                </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="evento-local">
                <Form.Label className="mb-0">Local</Form.Label>
                <Form.Control
                    placeholder="Local do evento"
                    required
                    value={formData.local}
                    onChange={handleChange}
                    name='local'
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="evento-image">
                <Form.Label className="mb-0">Link da imagem</Form.Label>
                <Form.Control
                    placeholder="Link de tamanho curto da imagem"
                    required
                    value={formData.image}
                    onChange={handleChange}
                    name='image'
                    maxLength={100}
                />
                {formData.image.length}/100 Max.
            </Form.Group>
            <Button type="submit">{buttonLabel}</Button>
        </Form>
    )
}