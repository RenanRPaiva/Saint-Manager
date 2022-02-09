export const createInscription = async (inscriptionData) => {
    await fetch('http://localhost:3001/inscriptions', {
        method: 'POST',
        body: JSON.stringify(inscriptionData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}