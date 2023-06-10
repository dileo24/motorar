import { Routes, Route } from "react-router-dom";
import Home from "./components/secciones/Home";
import Contacto from "./components/secciones/Contacto";
import PregFrec from "./components/secciones/PregFrec";
import Indumentaria from "./components/secciones/Indumentaria";
import Proteccion from "./components/secciones/Proteccion";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/proteccion" element={<Proteccion />} />
        <Route exact path="/indumentaria" element={<Indumentaria />} />
        <Route exact path="/pregFrec" element={<PregFrec />} />
        <Route exact path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
