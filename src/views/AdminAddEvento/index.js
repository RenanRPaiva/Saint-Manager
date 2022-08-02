import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { LayoutPortal } from '../../components/LayoutPortal'
import { PortalTitle } from '../../components/PortalTitle'
import { UpsertEvento } from '../../components/UpsertEvento'
import { createEvento } from '../../services/Eventos'

export function AdminAddEventoView () {
    const navigate = useNavigate()
    const handleSubmit = async (values) => {
        try{
            await createEvento(values)
            navigate('/portal/eventos')
            toast.success('Evento cadastrado com sucesso.')
        }catch{
            toast.error('Falha ao cadastrar evento. Tente novamente.')
        }
    }
     return (
         <LayoutPortal>
             <PortalTitle>Novo Evento</PortalTitle>
             <UpsertEvento onSubmit={handleSubmit} />
         </LayoutPortal>
     )
 }