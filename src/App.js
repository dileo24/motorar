import { Routes, Route } from "react-router-dom";
import Home from "./components/secciones/Home";
import Contacto from "./components/formularios/Contacto";
import PregFrec from "./components/secciones/PregFrec";
import Indumentaria from "./components/secciones/Indumentaria";
import Proteccion from "./components/secciones/Proteccion";
import Motos from "./components/secciones/Motos";
import FormCotizacion from "./components/formularios/FormCotizacion";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/motos" element={<Motos />} />
        <Route exact path="/proteccion" element={<Proteccion />} />
        <Route exact path="/indumentaria" element={<Indumentaria />} />
        <Route exact path="/pregFrec" element={<PregFrec />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/formCotizacion" element={<FormCotizacion />} />
      </Routes>
    </div>
  );
}

export default App;
