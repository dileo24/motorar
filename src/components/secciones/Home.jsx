import React from "react";
import Navbar from "../recursos/Navbar";
import Footer from "../recursos/Footer";
import CarruselHome from "./seccHome/CarruselHome";
export default function Home() {
  return (
    <div className="homeContainer">
      <Navbar />
      <CarruselHome />
      <Footer />
    </div>
  );
}
