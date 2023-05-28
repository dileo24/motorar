import React from "react";

export default function Card({ nombre, precio, img, id }) {
  return (
    <div className="cardContainer">
      <div className="divImg">
        <img src={img} alt="img" />
      </div>
      <p className="titulo">{nombre}</p>
      <p className="preicio">{precio}</p>
      <button>Consultar cotización</button>
    </div>
  );
}
