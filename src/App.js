import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
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
      <Route path="/portal" element={<PrivateRoute> <DashboardView /> </PrivateRoute>} />
      <Route path="/portal/eventos" element={<PrivateRoute userTypes={[1]}> <AdminEventosView /> </PrivateRoute>} />
      <Route path="/portal/eventos/add" element={<PrivateRoute userTypes={[1]}> <AdminAddEventoView /> </PrivateRoute>} />
      <Route path="/portal/eventos/:id" element={<PrivateRoute userTypes={[1]}> <AdminEditEventoView /> </PrivateRoute>} />
      <Route path="/portal/login" element={<LoginView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
}

export default App;
