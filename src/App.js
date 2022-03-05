import { Route, Routes } from "react-router-dom";
import { AdminAddEventoView } from "./views/AdminAddEvento";
import { AdminEditEventoView } from "./views/AdminEditEvento";
import { AdminEventosView } from "./views/AdminEventos";
import { DashboardView } from "./views/Dashboard";
import { EventoDetailView } from "./views/EventoDetail";
import { EventoView } from "./views/Eventos";
import { HomeView } from "./views/Home";
import { LoginView } from "./views/Login";
import { NotFoundView } from "./views/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/eventos" element={<EventoView />} />
      <Route path="/eventos/:id" element={<EventoDetailView />} />
      <Route path="/portal" element={<DashboardView />} />
      <Route path="/portal/eventos" element={<AdminEventosView />} />
      <Route path="/portal/eventos/add" element={<AdminAddEventoView />} />
      <Route path="/portal/eventos/:id" element={<AdminEditEventoView />} />
      <Route path="/portal/login" element={<LoginView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
}

export default App;
