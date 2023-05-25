import React from "react";

export default function Card({ nombre, precio, img, id }) {
  return (
    <div>
      <p>{nombre}</p>
      <p>{precio}</p>
      <img src={img} alt="img" />
    </div>
  );
}
