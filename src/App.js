import { Route, Routes } from "react-router-dom";
import { EventoView } from "./views/Eventos";
import { HomeView } from "./views/Home";
import { NotFoundView } from "./views/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />  
      <Route path="/eventos" element={<EventoView />} />    
      <Route path="*" element={<NotFoundView />} /> 
          
    </Routes>
  );
}

export default App;
