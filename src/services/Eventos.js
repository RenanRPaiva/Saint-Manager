import { apiUrl, getAuthorizationHeader } from "./Api"

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

export const deleteEvento = async (id) => {
    const response = await fetch(`${apiUrl}/eventos/${id}`,{
        method: 'DELETE',
        headers: getAuthorizationHeader()
    })
    if (!response.ok){
        throw new Error('Response not OK.')
    }
}

export const createEvento = async (eventoData) => {
    const response = await fetch(`${apiUrl}/eventos`, {
        method: 'POST',
        body: JSON.stringify(eventoData),
        headers: {
            'Content-Type':'application/json',
            ...getAuthorizationHeader()
        }        
    })
    if (!response.ok) {
        throw new Error('response not ok.')
    }
}

export const updateEvento = async (id, eventoData) => {
    const response = await fetch(`${apiUrl}/eventos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(eventoData),
        headers: {
            'Content-Type':'application/json',
            ...getAuthorizationHeader()
        }
    })
    if (!response.ok) {
        throw new Error('response not ok.')
    }
}