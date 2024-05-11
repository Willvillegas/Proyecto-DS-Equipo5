
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import NavBar from "./components/NavBar";
import AssistantMenu from "./Pages/AssistantMenu";
import ScrollToTop from "./components/ScrollToTop";
import EquipoGuiaAssistentPage from "./Pages/EquipoGuiaAssistentPage";
import InfoProfesor from "./Pages/InfoProfesor";
import MostrarProfesorSede from "./Pages/MostrarProfesorSede";


function App() {
    return(
    <Router>
         <MostrarProfesorSede/>
        <LoginPage />
        <ForgotPasswordPage />
        <ResetPasswordPage />
        <EquipoGuiaAssistentPage/>
        <AssistantMenu />
        <InfoProfesor />
        <NavBar />
            <Routes>
                <Route path="/forgot-password-page" element={<ForgotPasswordPage/>}/>
                <Route path="/reset-password-page" element={<ResetPasswordPage/>}/>
                <Route path="/assistant-menu" element={<AssistantMenu/>}/>
                <Route path="equipo-guia-page" element={<EquipoGuiaAssistentPage/>}/>
                <Route path="info-profesor" element={<InfoProfesor/>}/>
                <Route path="mostrar-profesor-sede" element={<MostrarProfesorSede/>}/>
                </Routes>
            </Router> 
 
    );
}

export default App
