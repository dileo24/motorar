import React from "react";
import logo from "../../multimedia/logo2.PNG";

export default function Navbar({ url }) {
  const baseUrl = "/";

  const isActive = (section) => {
    return url === section ? "active" : "";
  };

  const navLinks = [
    { section: undefined, label: "Inicio" },
    { section: "motos", label: "Motos" },
    { section: "proteccion", label: "Protección" },
    { section: "indumentaria", label: "Indumentaria" },
    { section: "pregFrec", label: "Preguntas Frecuentes" },
    { section: "contacto", label: "Contacto" },
  ];

  return (
    <div className="navContainer">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid containNav">
          <a className="navbar-brand" href={baseUrl}>
            <img src={logo} alt="logo" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <nav className="navbar-nav">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  className={`nav-link ${isActive(link.section)}`}
                  href={link.section ? `${baseUrl}${link.section}` : baseUrl} // Evitar "/undefined"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
}
