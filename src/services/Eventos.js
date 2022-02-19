import { apiUrl } from "./Api"

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
        method: 'DELETE'
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
            'Content-Type':'application/json'
        }        
    })
    if (!response.ok) {
        throw new Error('response not ok.')
    }
}