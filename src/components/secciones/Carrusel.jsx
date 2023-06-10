import React from "react";
import sport from "../../multimedia/sport.jpg";
import cross from "../../multimedia/cross.jpg";
import street from "../../multimedia/street.jpg";

export default function Carrusel() {
  return (
    <div class="carousel">
      <div id="carouselExample" class="d-block w-100 h-100 carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={sport} class="d-block w-100 h-auto" alt="sport" />
          </div>
          <div class="carousel-item">
            <img src={cross} class="d-block w-100 h-fluid" alt="cross" />
          </div>
          <div class="carousel-item">
            <img src={street} class="d-block w-100 h-auto" alt="street" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
