import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { createInscription } from "../../services/Inscriptions";
import { selectUser } from "../../store/User/Selectors";
import { AuthForm } from "../../components/AuthForm";
import { toast } from "react-toastify";

export function InscritoForm({ eventoId, onRegister, listInscriptions }) {
    const user = useSelector(selectUser)
    const [isSubmiting, setIsSubmiting] = useState(false)
    const handleInscription = async () => {
        try {
            setIsSubmiting(true)
            const inscriptionData = {
                eventoId: parseInt(eventoId),
                userId: user.id,
                name: user.name
            }
            await createInscription(inscriptionData)
            toast.success('Você foi inscrito com sucesso!')
            onRegister()
        } catch {
            toast.error('Falha ao realizar inscrição. Tente novamente!')
        }
        setIsSubmiting(false)
    }
    const inscrito = listInscriptions?.some(item => item.userId === user?.id) || false
    return (
        <>
            <h2>Inscreva-se:</h2>
            {user ? (
                <Button onClick={handleInscription} disabled={isSubmiting || inscrito} variant={inscrito ? 'success' : 'primary'}>{inscrito ? 'Inscrito!' : 'Inscrever'}</Button>
            ) : (
                <AuthForm redirectAfterLogin={false} />
            )}
        </>
    )
}