import React from "react";
import sport from "../../../multimedia/sport.jpg";
import cross from "../../../multimedia/cross.jpg";
import street from "../../../multimedia/street.jpg";
import Carrusel from "../../recursos/Carrusel";

export default function CarruslHome() {
  return (
    <div>
      <Carrusel img1={sport} img2={cross} img3={street} />
    </div>
  );
}
