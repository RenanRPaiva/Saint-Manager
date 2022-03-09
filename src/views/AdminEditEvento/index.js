import { LayoutPortal } from '../../components/LayoutPortal'
import { UpsertEvento } from '../../components/UpsertEvento'
import { PortalTitle } from '../../components/PortalTitle'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getEventoById, updateEvento } from '../../services/Eventos'
import { toast } from 'react-toastify'
import { Loading } from '../../components/Loading'

export function AdminEditEventoView() {
    const { id } = useParams()
    const [evento, setEvento] = useState()
    useEffect(() => {
        const fetchEvento = async () => {
            try {
                const {
                    name,
                    depart,
                    coord,
                    shortDescription,
                    team,
                    date,
                    time,
                    local,
                    image
                } = await getEventoById(id)
                setEvento({
                    name,
                    depart,
                    coord,
                    shortDescription,
                    team,
                    date,
                    time,
                    local,
                    image
                })
            } catch {
                toast.error('Falha ao buscar dados do evento. Recarregue a página.')
            }
        }
        fetchEvento()
    }, [id])
    const navigate = useNavigate()
    const handleSubmit = async (values) => {
        try {
            await updateEvento(id, values) 
            toast.success('Evento atualizado com sucesso.')
            navigate('/portal/eventos')
        } catch {
            toast.error('Falha ao atualizar evento. Tente novamente.')
        }
    }
    return (
        <LayoutPortal>
            <PortalTitle>Editar Evento</PortalTitle>
            {evento ? (
                <UpsertEvento initialState={evento} buttonLabel='Alterar' onSubmit={handleSubmit}/>
            ) : (
                <Loading />
            )}
        </LayoutPortal>
    )
}