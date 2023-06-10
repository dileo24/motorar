import React from "react";
import Navbar from "../recursos/Navbar";
import Carrusel from "../recursos/Carrusel";
import Footer from "../recursos/Footer";
import Card from "../recursos/Card";
import productos from "../../multimedia/productos.json";
import seg1 from "../../multimedia/seg1.jpg";
import seg2 from "../../multimedia/seg2.jpg";
import seg3 from "../../multimedia/seg3.jpg";

export default function Proteccion() {
  const url = window.location.pathname.split("/").pop();
  const pordProtecc = productos.filter((p) => p.tipo === "Protección");

  return (
    <div className="homeContainer">
      <Navbar url={url} />
      <Carrusel img1={seg1} img2={seg2} img3={seg3} />
      <div className="title">Nuestros Productos</div>
      <div className="home-subContainer">
        {pordProtecc.map((p) => (
          <div key={p.id}>
            <Card nombre={p.nombre} precio={p.precio} img={p.img} id={p.id} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
