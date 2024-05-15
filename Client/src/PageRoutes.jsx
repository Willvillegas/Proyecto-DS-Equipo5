import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import Menu from "./Pages/Menu";
import EquipoGuiaAssistentPage from "./Pages/EquipoGuiaAssistentPage";
import PlanTrabajoPage from "./Pages/PlanTrabajoPage";
import AddEstudiantesPage from "./Pages/AddEstudiantesPage";
import EstudiantesPage from "./Pages/EstudiantesPage";
import ActividadPage from "./Pages/ActividadPage";
import InfoProfesor from "./Pages/InfoProfesor";
import MostrarProfesorSede from "./Pages/MostrarProfesorSede";
import DetallesActividad from "./Pages/DetallesActividad";
import Comentarios from "./Pages/Comentarios";
import InfoProf from "./Pages/InfoProf";
import ModificarProfesor from "./Pages/ModificarProfesor";
import RecuperarPassword from "./Pages/RecuperarPassword";
import DetallesEstudiante from "./Pages/DetallesEstudiante";
import ModificarEstudiante from "./Pages/ModificarEstudiante";
//import NotFoundPage from "./Pages/NotFoundPage"; // Add a NotFoundPage component

const RoutesPages = () => (
  <Routes>  
    <Route path="/" element={<LoginPage />} />
    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    <Route path="/reset-password" element={<RecuperarPassword/>} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/agregar-estudiantes" element={<AddEstudiantesPage />} />
    <Route path="/estudiantes" element={<EstudiantesPage />} />
    <Route path="/equipo-guia" element={<EquipoGuiaAssistentPage />} />
    <Route path="/plan-trabajo" element={<PlanTrabajoPage />} />
    <Route path="/info-profesor" element={<InfoProfesor />} />
    <Route path="/mostrar-profesor-sede" element={<MostrarProfesorSede />} />
    <Route path="/detalle-actividad/:id" element={<DetallesActividad/>} />
    <Route path="/detalle-estudiantes" element={<DetallesEstudiante/>} />
    <Route path="/actividad/:id" element={<ActividadPage/>} />
    <Route path="/comentarios/:id" element={<Comentarios/>} />
    <Route path="/info-prof" element={<InfoProf/>} />
    <Route path="/modificar-estudiante" element={<ModificarEstudiante/>} />
    <Route path="/modificar-profesor" element={<ModificarProfesor/>} />
    
  </Routes>
);

export default RoutesPages;