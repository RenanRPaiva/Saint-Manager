import { Layout } from "../../components/Layout";
import Logo from '../../assets/img/Logo-saint-manager.png'
import { Container } from "react-bootstrap";

export function NotFoundView() {
  return (
    <Layout>
      <Container className="text-center mt-4">
        <h1>Página não encontrada!</h1>
        <p>A página que você está procurando não foi encontrada ou foi movida.</p>
        <p>Utilize o Menu principal ou retorne para pagina inicial para navegar entre as páginas.</p>
        <img src={Logo} alt="Logo Saint Manager" />
      </Container>
    </ Layout>
  )
}