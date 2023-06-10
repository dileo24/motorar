import React from "react";

export default function Card({ nombre, precio, img, id }) {
  return (
    <div className="cardContainer">
      <div className="divImg">
        <img src={img} alt="img" />
      </div>
      <p className="nombre">{nombre}</p>
      <p className="precio">
        {"$"}
        {precio}
      </p>
      <button>Consultar cotización</button>
    </div>
  );
}
