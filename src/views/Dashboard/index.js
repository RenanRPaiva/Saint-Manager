import { LayoutPortal } from "../../components/LayoutPortal";
import Logo from '../../assets/img/Logo-saint-manager.png'
import { Container } from "react-bootstrap";

export function DashboardView() {
    return (
        <LayoutPortal>
            <Container>
                <h1>Dashboard</h1>
                <div className="text-center">
                <img src={Logo} alt="Logo Saint Manager" className="opacity-25" />
                </div>
            </Container>
        </LayoutPortal>
    )
}