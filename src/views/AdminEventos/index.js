import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { LayoutPortal } from '../../components/LayoutPortal'
import { Loading } from '../../components/Loading'
import { PortalTitle } from '../../components/PortalTitle'
import { deleteEvento, getEventos } from '../../services/Eventos'
import { TableEventos } from './TableEventos'

export function AdminEventosView() {
    const [eventos, setEventos] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchEventos = async () => {
        try {
            const data = await getEventos()
            setEventos(data)
        } catch {
            toast.error('Falha ao listar eventos. Tente Novamente! ')
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchEventos()
    }, [])
    const handleDeleteEvento = async (id) => {
        try {
            await deleteEvento(id)
            await fetchEventos()
            toast.success('Evento excluído com sucesso.')
        }catch {
            toast.error('Falha ao excluir evento. Tente novamente.')
        } 
    }
    return (
        <LayoutPortal>
            <PortalTitle buttonText='Novo Evento' buttonLink='/portal/eventos/add'>Eventos Cadastrados</PortalTitle>
            {loading ? (
                <Loading />
            ) : (
                <TableEventos eventos={eventos} onClickDelete={handleDeleteEvento} />
            )}
        </LayoutPortal>
    )
}