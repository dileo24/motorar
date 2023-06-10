import React, { useState } from "react";
import Navbar from "../recursos/Navbar";
import Footer from "../recursos/Footer";
import imgPreg from "../../multimedia/pregFrec.png";
import ojoAbierto from "../../multimedia/ojoAbierto.png";
import ojoCerrado from "../../multimedia/ojoCerrado.png";
import preguntas from "../../multimedia/preguntas.json";

export default function PregFrec() {
  const [mostrando, setMostrando] = useState(false);
  const url = window.location.pathname.split("/").pop();

  const handlePreg = (pregId) => {
    setMostrando((valorActual) => ({
      [pregId]: !valorActual[pregId],
    }));
  };

  return (
    <div className="pregContainer">
      <Navbar url={url} />
      <div className="inicio">
        <h1 className="titulo">
          Preguntas frecuentes <br /> de nuestros clientes
        </h1>
        <div className="boxsContainer">
          <div className="boxIzquierda">
            <p>
              A continuación vas a poder ver las preguntas más importantes que
              hemos recibido de clientes, estas facilitarán el entender la
              importancia de digitalizar todo proceso productivo, de información
              o de compra.{" "}
            </p>
            <div className="links">
              <a href="#pregsPagina" style={{ textDecoration: "none" }}>
                Preguntas sobre la página
              </a>
              <a href="#pregsPlanes" style={{ textDecoration: "none" }}>
                Preguntas sobre la planes
              </a>
              <a href="#pregsCom" style={{ textDecoration: "none" }}>
                Preguntas sobre comunicación
              </a>
            </div>
          </div>
          <div className="boxDerecha">
            <div className="box">
              <p className="subText1">
                Acá vas a poder ver referencias para acercarte más rápido al
                tipo de preguntas que tengas! Por supuesto, ante cualquier duda
                no planteada acá, recordá que podés contactar con nosotros y
                responderemos lo antes posible.
              </p>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <img src={imgPreg} alt="img" />
        </div>
      </div>

      <div className="pregContainer">
        <div className="pregsPagina" id="pregsPagina">
          <h1>Preguntas de la Página</h1>
          {preguntas.map(
            (preg, pregId) =>
              preg.tipo === "pagina" && (
                <div className="preg" key={pregId}>
                  <div className="superior" onClick={() => handlePreg(pregId)}>
                    <p className="titulo">{preg.titulo}</p>
                    <img
                      src={mostrando[pregId] ? ojoAbierto : ojoCerrado}
                      alt="ojo"
                    />
                  </div>
                  {mostrando[pregId] && (
                    <p className="parrafo">
                      {preg.resp.split("\n").map((linea, index) => (
                        <React.Fragment key={index}>
                          {linea}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  )}
                </div>
              )
          )}
        </div>
        <div className="pregsPlanes" id="pregsPlanes">
          <h1>Preguntas de Planes</h1>
          {preguntas.map(
            (preg, pregId) =>
              preg.tipo === "planes" && (
                <div className="preg" key={pregId}>
                  <div className="superior" onClick={() => handlePreg(pregId)}>
                    <p className="titulo">{preg.titulo}</p>
                    <img
                      src={mostrando[pregId] ? ojoAbierto : ojoCerrado}
                      alt="ojo"
                    />
                  </div>
                  {mostrando[pregId] && (
                    <p className="parrafo">
                      {preg.resp.split("\n").map((linea, index) => (
                        <React.Fragment key={index}>
                          {linea}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  )}
                </div>
              )
          )}
        </div>
        <div className="pregsCom" id="pregsCom">
          <h1>Preguntas de comunicacion</h1>
          {preguntas.map(
            (preg, pregId) =>
              preg.tipo === "comunicacion" && (
                <div className="preg" key={pregId}>
                  <div className="superior" onClick={() => handlePreg(pregId)}>
                    <p className="titulo">{preg.titulo}</p>
                    <img
                      src={mostrando[pregId] ? ojoAbierto : ojoCerrado}
                      alt="ojo"
                    />
                  </div>
                  {mostrando[pregId] && (
                    <p className="parrafo">
                      {preg.resp.split("\n").map((linea, index) => (
                        <React.Fragment key={index}>
                          {linea}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  )}
                </div>
              )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
