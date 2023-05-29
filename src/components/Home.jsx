import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import productos from "../multimedia/productos.json";
import Card from "./Card";
import Carrusel from "./Carrusel";

export default function Home() {
  return (
    <div className="homeContainer">
      <Navbar />
      <Carrusel />
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
