import { BrowserRouter as Router } from "react-router-dom";
import RoutesPages from "./PageRoutes";
import NavBar from "./components/NavBar";

const App = () => (
  <Router>
    <NavBar />
    <div className="mt-9" />
    <RoutesPages />
  </Router>
);

export default App;
