import { apiUrl } from "./Api"
import { removeStorageItem, setStorageItem } from "./Storage"


export const login = async (credentialsData) => {
    const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        body: JSON.stringify(credentialsData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    if (!response.ok) {
        const message = data === 'incorrect password' || data === 'Cannot find user'
            ? 'Credentials invalid.'
            : 'response not ok.'
        throw new Error(message)
    }
   return proccessLoginResponse(data)
}

export const logout = () => {
    removeStorageItem('user')
}

export const createUser = async (userData) => {
    const body = {
        ...userData,
        type: 2,
    }
    const response = await fetch(`${apiUrl}/users`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    if (!response.ok) {
        const message = typeof data === 'string'
            ? data
            : 'response not ok.'
        throw new Error(message)
    }
    return proccessLoginResponse(data)
}

const proccessLoginResponse = (data) => {
    const userData = {
        accessToken: data.accessToken,
        ...data.user
    }
    setStorageItem('user', JSON.stringify(userData))
    return userData
}