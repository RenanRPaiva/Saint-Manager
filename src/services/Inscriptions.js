import { apiUrl } from "./Api"

export const createInscription = async (inscriptionData) => {
    await fetch(`${apiUrl}/inscriptions`, {
        method: 'POST',
        body: JSON.stringify(inscriptionData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}