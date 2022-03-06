import { apiUrl } from "./Api"
import { setStorageItem } from "./Storage"

export const login = async (credentialsData) => {
    const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        body: JSON.stringify(credentialsData),
        headers: {
            'Content-Type':'application/json'
        }        
    })
    const data = await response.json()
    if (!response.ok) {
        const message = data === 'incorrect password' || data === 'Cannot find user'
        ? 'Credentials invalid.'
        : 'response not ok.'
        throw new Error(message)
    }
    const userData = {
        accessToken: data.accessToken,
        ...data.user
    }
    setStorageItem('user', JSON.stringify(userData))
}