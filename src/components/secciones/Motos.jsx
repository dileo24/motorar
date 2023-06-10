import React from "react";
import Navbar from "../recursos/Navbar";
import Carrusel from "../recursos/Carrusel";
import Footer from "../recursos/Footer";
import Card from "../recursos/Card";
import productos from "../../multimedia/productos.json";
import sport from "../../multimedia/sport.jpg";
import cross from "../../multimedia/cross.jpg";
import street from "../../multimedia/street.jpg";

export default function Motos() {
  const url = window.location.pathname.split("/").pop();
  const pordMotos = productos.filter(
    (p) =>
      p.tipo === "Moto Cross" ||
      p.tipo === "Moto Street" ||
      p.tipo === "Moto Sport"
  );

  return (
    <div className="homeContainer">
      <Navbar url={url} />
      <Carrusel img1={sport} img2={cross} img3={street} />
      <div className="title">Nuestras Motos</div>
      <div className="home-subContainer">
        {pordMotos.map((p) => (
          <div key={p.id}>
            <Card nombre={p.nombre} precio={p.precio} img={p.img} id={p.id} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
