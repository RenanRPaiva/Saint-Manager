import { apiUrl } from "./Api"

export const login = async (credentialsData) => {
    const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        body: JSON.stringify(credentialsData),
        headers: {
            'Content-Type':'application/json'
        }        
    })
    if (!response.ok) {
        const error = await response.json()
        const message = error === 'incorrect password' || error === 'Cannot find user'
        ? 'Credentials invalid.'
        : 'response not ok.'
        throw new Error(message)
    }
}