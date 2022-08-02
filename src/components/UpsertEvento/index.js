import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ListName } from "./ListName";

const emptyState = {
    name: '',
    depart: '',
    coord: [],
    shortDescription: '',
    team: [],
    date: '',
    time: '',
    local: '',
    image: ''
}

export function UpsertEvento({ onSubmit, buttonLabel = 'Cadastrar', initialState = emptyState }) {
    const [formData, setFormData] = useState(initialState)
    const [coordName, setCoordName] = useState('')
    const [teamName, setTeamName] = useState('')
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
    const deleteCoord = (index) => {
        let newListCoord = [
            ...formData.coord,
        ]
        newListCoord.splice(index, 1)
        setFormData({
            ...formData,
            coord: newListCoord
        })
    }
    const deleteTeam = (index) => {
        let newListTeam = [
            ...formData.team
        ]
        newListTeam.splice(index,1)
        setFormData({
            ...formData,
            team: newListTeam
        })
    }
    const addButtonCoord = () => {
        if (!!coordName) {

            setFormData({
                ...formData,
                coord: [
                    ...formData.coord,
                    coordName
                ]
            })
            setCoordName('')
        }
    }
    const addButtonTeam = () => {
        if (!!teamName) {

            setFormData({
                ...formData,
                team: [
                    ...formData.team,
                    teamName
                ]
            })
            setTeamName('')
        }
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
                <div className="d-flex d-colum gap-2" >
                    <Form.Label className="mb-0 mt-2">Coordenador(a)</Form.Label>
                    <Button className="mb-3" onClick={addButtonCoord}>Adicionar</Button>
                </div>
                <Form.Control
                    placeholder="Nome do coordenador(a) do departamento"
                    value={coordName}
                    onChange={(event) => {
                        setCoordName(event.target.value)
                    }}
                    name='coord'
                    maxLength={45}
                />
                {coordName.length}/45 Max.
                <ListName list={formData.coord} handleDelete={deleteCoord} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="evento-team">
                <div className="d-flex d-colum gap-2" >
                    <Form.Label className="mb-0 mt-2">Membros de equipe</Form.Label>
                    <Button className="mb-3" onClick={addButtonTeam}>Adicionar</Button>
                </div>
                <Form.Control
                    placeholder="Nome dos membros da equipe organizadora do evento"
                    value={teamName}
                    onChange={(event) => {
                        setTeamName(event.target.value)
                    }}
                    name='team'
                    maxLength={45}
                />
                {teamName.length}/45 Max.
                <ListName list={formData.team} handleDelete={deleteTeam} />
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