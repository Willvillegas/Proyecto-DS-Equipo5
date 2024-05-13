import { BrowserRouter as Router } from "react-router-dom";
import RoutesPages from "./PageRoutes";
import NavBar from "./components/NavBar";
import { AuthContextProvider } from "./context/AuthContext";



const App = () => (
  <AuthContextProvider>
    <Router>
      <NavBar />
      <div className="mt-9" />
      <RoutesPages />
    </Router>
  </AuthContextProvider>
);

export default App;
