import { Routes, Route } from "react-router-dom";
import Home from "./components/secciones/Home";
import Contacto from "./components/secciones/Contacto";
import PregFrec from "./components/secciones/PregFrec";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/pregFrec" element={<PregFrec />} />
      </Routes>
    </div>
  );
}

export default App;
