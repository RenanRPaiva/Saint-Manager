import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { LayoutPortal } from '../../components/LayoutPortal'
import { Loading } from '../../components/Loading'
import { PortalTitle } from '../../components/PortalTitle'
import { getEventos } from '../../services/Eventos'
import { TableEventos } from './TableEventos'

export function AdminEventosView() {
    const [eventos, setEventos] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const data = await getEventos()
                setEventos(data)
            } catch {
                toast.error('Falha ao listar eventos. Tente Novamente! ')
            }
            setLoading(false)
        }
        fetchEventos()
    }, [])
    return (
        <LayoutPortal>
            <PortalTitle buttonText='Novo Evento' buttonLink='/portal/eventos/add'>Eventos Cadastrados</PortalTitle>
            {loading ? (
                <Loading />
            ) : (
                <TableEventos eventos={eventos} />
            )}
        </LayoutPortal>
    )
}