import { apiUrl } from "./Api.service"

export const getEventoById = async (id) => {
    const response = await fetch(`${apiUrl}/eventos/${id}?_embed=inscriptions`)
    if (!response.ok) {
        throw new Error('Response not OK.')
    }
    return await response.json()
}

export const getEventos = async () => {
    const response = await fetch(`${apiUrl}/eventos`)
    if (!response.ok) {
        throw new Error('Response not OK.')
    }
    return await response.json()
}