import React from "react";
import Navbar from "../recursos/Navbar";
import Carrusel from "../recursos/Carrusel";
import Footer from "../recursos/Footer";
import Card from "../recursos/Card";
import productos from "../../multimedia/productos.json";
import ind1 from "../../multimedia/ind1.jpg";
import ind2 from "../../multimedia/ind2.jpg";
import ind3 from "../../multimedia/ind3.jpg";

export default function Indumentaria() {
  const url = window.location.pathname.split("/").pop();
  const pordIndum = productos.filter((p) => p.tipo === "Indumentaria");

  return (
    <div className="homeContainer">
      <Navbar url={url} />
      <Carrusel img1={ind1} img2={ind2} img3={ind3} />
      <div className="title">Nuestra Indumentaria</div>
      <div className="home-subContainer">
        {pordIndum.map((p) => (
          <div key={p.id}>
            <Card nombre={p.nombre} precio={p.precio} img={p.img} id={p.id} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
