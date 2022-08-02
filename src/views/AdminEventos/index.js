import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { LayoutPortal } from '../../components/LayoutPortal'
import { Loading } from '../../components/Loading'
import { ModalConfirm } from '../../components/ModalConfirm'
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
    const [eventoToDelete, setEventoToDelete] = useState()
    const openModal = (evento) => {
        setEventoToDelete(evento)
    }
    const closeModal = () => {
        setEventoToDelete(undefined)
    }
    const handleDeleteEvento = async () => {
        try {
            await deleteEvento(eventoToDelete.id)
            await fetchEventos()
            toast.success('Evento excluído com sucesso.')
            closeModal()
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
                <TableEventos eventos={eventos} onClickDelete={openModal} />
            )}
            <ModalConfirm 
            show={!!eventoToDelete}
            onConfirm={handleDeleteEvento} 
            onHide={closeModal}
            title='Deseja mesmo excluir?'
            content={<p>Ao clicar em confirmar, o evento <strong>{eventoToDelete?.name}</strong> será excluído sem volta. Deseja realmente remover o evento?</p>}
            confirmVariant='danger'
            />
        </LayoutPortal>
    )
}