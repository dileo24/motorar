import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contacto from "./components/Contacto";
import PregFrec from "./components/PregFrec";

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
