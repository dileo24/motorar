import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
