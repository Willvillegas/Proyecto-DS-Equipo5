import { BrowserRouter as Router } from "react-router-dom";
import RoutesPages from "./PageRoutes";
import NavBar from "./components/NavBar";

const App = () => (
  <Router>
    <NavBar />
    <RoutesPages />
  </Router>
);

export default App;
