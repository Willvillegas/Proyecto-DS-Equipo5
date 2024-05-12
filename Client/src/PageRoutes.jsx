import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import AssistantMenu from "./Pages/AssistantMenu";
import EquipoGuiaAssistentPage from "./Pages/EquipoGuiaAssistentPage";
import PlanTrabajoPage from "./Pages/PlanTrabajoPage";
import EstudiantesPage from "./Pages/EstudiantesPage";
import ActividadPage from "./Pages/ActividadPage";
import InfoProfesor from "./Pages/InfoProfesor";
import MostrarProfesorSede from "./Pages/MostrarProfesorSede";
import DetallesActividad from "./Pages/DetallesActividad";
import Comentarios from "./Pages/Comentarios";
import InfoProf from "./Pages/InfoProf";
//import NotFoundPage from "./Pages/NotFoundPage"; // Add a NotFoundPage component

const RoutesPages = () => (
  <Routes>  
    <Route path="/" element={<LoginPage />} />
    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    <Route path="/reset-password" element={<ResetPasswordPage />} />
    <Route path="/assistant-menu" element={<AssistantMenu />} />
    <Route path="/estudiantes" element={<EstudiantesPage />} />
    <Route path="/equipo-guia" element={<EquipoGuiaAssistentPage />} />
    <Route path="/plan-trabajo" element={<PlanTrabajoPage />} />
    <Route path="/info-profesor" element={<InfoProfesor />} />
    <Route path="/mostrar-profesor-sede" element={<MostrarProfesorSede />} />
    <Route path="/detalle-actividad/:id" element={<DetallesActividad/>} />
    <Route path="/actividad" element={<ActividadPage/>} />
    <Route path="/comentarios/:id" element={<Comentarios/>} />
    <Route path="/info-prof" element={<InfoProf/>} />
  </Routes>
);


export default RoutesPages;