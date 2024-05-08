
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import NavBar from "./components/NavBar";
import AssistantMenu from "./Pages/AssistantMenu";
import ScrollToTop from "./components/ScrollToTop";



function App() {
    return(
    <Router>
        <LoginPage />
        <ForgotPasswordPage />
        <ResetPasswordPage />

        <AssistantMenu />
        <NavBar />
            <Routes>
                <Route path="/forgot-password-page" element={<ForgotPasswordPage/>}/>
                <Route path="/reset-password-page" element={<ResetPasswordPage/>}/>
                <Route path="/assistant-menu" element={<AssistantMenu/>}/>
                </Routes>
            </Router> 
 
    );
}

export default App
