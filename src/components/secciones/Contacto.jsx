import React, { useState } from "react";
import axios from "axios";
import { useSpring, animated } from "react-spring";
import enviadoCorr from "../../multimedia/enviadoCorr.png";
import Navbar from "../recursos/Navbar";
import Footer from "../recursos/Footer";

export default function Contacto() {
  const [, setEnviado] = useState(false);
  const [animProps, setAnimProps] = useSpring(() => ({
    opacity: 0,
    transform: "scale(0.5)",
  }));
  const [input, setInput] = useState({
    name: "",
    empresa: "",
    pais: "",
    ciudad: "",
    celular: "",
    email: "",
    mensaje: "",
    planTipo: "",
  });

  const handlerChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handlerSelectPlan = (e) => {
    if (!input.planTipo.includes(e.target.id)) {
      setInput({
        ...input,
        planTipo: e.target.id,
      });
    }
    console.log(e.target.id);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEnviado(true);

    const formData = new FormData();
    Object.entries(input).forEach(([id, value]) => {
      formData.append(id, value);
    });
    formData.append("_subject", "Go Page Portafolio");
    formData.append("_captcha", "false");

    try {
      const response = await axios.post(
        "https://formsubmit.co/ajax/gopagearg@gmail.com",
        formData
      );
      if (response.data.success) {
        console.log("Se envió correctamente");
        setAnimProps.start({
          opacity: 1,
          transform: "scale(1)",
          position: "absolute",
          display: "flex",
        });
        setTimeout(() => {
          setAnimProps.start({
            opacity: 0,
            transform: "scale(0.5)",
            display: "none",
          });
        }, 2500);
      } else {
        console.log(`Hubo un error: ${response.data}`);
      }
    } catch (error) {
      console.log(`Hubo un error: ${error}`);
    }
    setTimeout(() => {
      setEnviado(false);
      setInput({
        name: "",
        empresa: "",
        pais: "",
        ciudad: "",
        celular: "",
        email: "",
        mensaje: "",
        planTipo: "",
      });
    }, 500);
  };

  return (
    <div>
      {" "}
      <Navbar />
      <section className="contactoContainer" id="contacto">
        <div className="formContainer">
          <form name="contacto-GoPage" netlify="true" onSubmit={handleSubmit}>
            <div className="text">
              <h1 className="titulo">Hablanos un poco más de vos...</h1>
              <p className="parrafo">
                ¿Listo para dar el siguiente paso? Nuestro equipo espera para
                brindarte la orientación que necesites, mientras tanto contanos
                un poco de qué tenés pensado para tu proyecto.{" "}
                <span>¡Te esperamos!</span>
              </p>
            </div>
            <div className="inputS">
              <div className="inputSContainer">
                <div className="sect sect1">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={input.name}
                    onChange={(e) => handlerChange(e)}
                    required
                    placeholder="Nombre y apellido"
                  />
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={input.empresa}
                    onChange={(e) => handlerChange(e)}
                    required
                    placeholder="Empresa"
                  />
                  <input
                    type="text"
                    id="pais"
                    name="pais"
                    value={input.pais}
                    onChange={(e) => handlerChange(e)}
                    required
                    placeholder="País"
                  />
                </div>

                <div className="sect sect2">
                  <input
                    type="text"
                    id="ciud"
                    name="ciudad"
                    value={input.ciudad}
                    onChange={(e) => handlerChange(e)}
                    required
                    placeholder="Ciudad"
                  />

                  <input
                    type="number"
                    id="cel"
                    name="celular"
                    className="celIn"
                    value={input.celular}
                    onChange={(e) => handlerChange(e)}
                    required
                    placeholder="Celular"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={input.email}
                    onChange={(e) => handlerChange(e)}
                    required
                    placeholder="Correo electrónico"
                  />
                </div>
              </div>
              <div className="checkbox">
                <label htmlFor="Oro">
                  Oro
                  <input
                    type="radio"
                    name="planTipo"
                    id="Oro"
                    value={input.planTipo}
                    onChange={(e) => handlerSelectPlan(e)}
                  />
                </label>
                <label htmlFor="Plata">
                  Plata
                  <input
                    type="radio"
                    name="planTipo"
                    id="Plata"
                    value={input.planTipo}
                    onChange={(e) => handlerSelectPlan(e)}
                  />
                </label>
                <label htmlFor="Bronce">
                  Bronce
                  <input
                    type="radio"
                    name="planTipo"
                    id="Bronce"
                    value={input.planTipo}
                    onChange={(e) => handlerSelectPlan(e)}
                  />
                </label>
                <label htmlFor="Personalizado">
                  Personalizado
                  <input
                    type="radio"
                    name="planTipo"
                    id="Personalizado"
                    value={input.planTipo}
                    onChange={(e) => handlerSelectPlan(e)}
                  />
                </label>
              </div>
              <textarea
                id="message"
                name="mensaje"
                value={input.mensaje}
                onChange={(e) => handlerChange(e)}
                required
                placeholder="Contanos sobre tu empresa/negocio y lo que te gustaría conseguir con tu página, nos pondremos en contacto en cuanto podamos."
              ></textarea>

              <input type="submit" value="Enviar" className="btnEnviar" />
            </div>
            <animated.div style={animProps} className="animac">
              <div className="divAviso">
                <p>ENVIADO CORRECTAMENTE</p>
                <img src={enviadoCorr} alt="img" />
              </div>
            </animated.div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
