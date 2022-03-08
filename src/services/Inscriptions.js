import { apiUrl, getAuthorizationHeader } from "./Api"

export const createInscription = async (inscriptionData) => {
    const response = await fetch(`${apiUrl}/inscriptions`, {
        method: 'POST',
        body: JSON.stringify(inscriptionData),
        headers: {
            'Content-Type': 'application/json',
            ...getAuthorizationHeader()
        }
    })
    if (!response.ok) {
        throw new Error('Response not OK.')
    }
}