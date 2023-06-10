import React from "react";
import Navbar from "../recursos/Navbar";
import Footer from "../recursos/Footer";
import productos from "../../multimedia/productos.json";
import Card from "../recursos/Card";
import Carrusel from "../recursos/Carrusel";
import sport from "../../multimedia/sport.jpg";
import cross from "../../multimedia/cross.jpg";
import street from "../../multimedia/street.jpg";

export default function Home() {
  return (
    <div className="homeContainer">
      <Navbar />
      <Carrusel img1={sport} img2={cross} img3={street} />
      <div className="title">Nuestros Productos</div>
      <div className="home-subContainer">
        {productos.map((p) => (
          <div key={p.id}>
            <Card nombre={p.nombre} precio={p.precio} img={p.img} id={p.id} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
