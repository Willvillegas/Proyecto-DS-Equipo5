import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import Menu from "./Pages/Menu";
import EquipoGuiaAssistentPage from "./Pages/EquipoGuiaAssistentPage";
import PlanTrabajoPage from "./Pages/PlanTrabajoPage";
import AddEstudiantesPage from "./Pages/AddEstudiantesPage";
import EstudiantesPage from "./Pages/EstudiantesPage";
import ActividadPage from "./Pages/ActividadPage";
import MostrarProfesorSede from "./Pages/MostrarProfesorSede";
import DetallesActividad from "./Pages/DetallesActividad";
import Comentarios from "./Pages/Comentarios";
import ModificarProfesor from "./Pages/ModificarProfesor";
import RecuperarPassword from "./Pages/RecuperarPassword";
import DetallesEstudiante from "./Pages/DetallesEstudiante";
import ModificarEstudiante from "./Pages/ModificarEstudiante";
import RegistrarProfesor from "./Pages/RegistrarProfesor";
import NotFoundPage from "./Pages/NotFound";

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
    <Route path="/mostrar-profesor/:id" element={<MostrarProfesorSede />} />
    <Route path="/detalle-actividad/:id" element={<DetallesActividad/>} />
    <Route path="/detalle-estudiantes/:id" element={<DetallesEstudiante/>} />
    <Route path="/actividad/:id" element={<ActividadPage/>} />
    <Route path="/comentarios/:id" element={<Comentarios/>} />
    <Route path="/modificar-estudiante/:id" element={<ModificarEstudiante/>} />
    <Route path="/modificar-profesor" element={<ModificarProfesor/>} />
    <Route path="/registrar-profesor" element={<RegistrarProfesor/>} />
    <Route path="*" element={<NotFoundPage/>} />
  </Routes>
);

export default RoutesPages;