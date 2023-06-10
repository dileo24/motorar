import React from "react";
import { Link } from "react-router-dom";

export default function Card({ nombre, precio, img, tipo, id }) {
  return (
    <div className="cardContainer">
      <div className="divImg">
        <img src={img} alt="img" />
      </div>
      <p className="nombre">{nombre}</p>
      <p className="nombre">{tipo}</p>
      <p className="precio">
        {"$"}
        {precio}
      </p>
      <Link to="/formCotizacion">
        <button>Consultar cotización</button>
      </Link>
    </div>
  );
}
