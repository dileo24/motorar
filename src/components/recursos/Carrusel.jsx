import React from "react";

export default function Carrusel({img1, img2, img3}) {
  return (
    <div className="carousel">
      <div id="carouselExample" className="d-block w-100 h-100 carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100 h-auto" alt="img1" />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100 h-fluid" alt="img2" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100 h-auto" alt="img3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
