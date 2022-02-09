export const getEventoById = async (id) => {
    const response = await fetch(`http://localhost:3001/eventos/${id}?_embed=inscriptions`)
    if (!response.ok) {
        throw new Error('Response not OK.')
    }
   return await response.json()    
}

export const getEventos = async () => {
    const response = await fetch('http://localhost:3001/eventos')
    if (!response.ok) {
        throw new Error('Response not OK.')
    }
    return await response.json()
}