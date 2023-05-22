import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss"

export const NavBar: React.FC = () => {
  return (
    <nav
      style={{ backgroundColor: "#F4F2EC" }}
      role="navigation"
      aria-label="main navigation"
      className="nav_container"
    >
        <strong >
          <Link to="/" className="logo">GreenCycle</Link>
        </strong>
      {/*  <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/createOrder">Reciclaje</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/login">Iniciar sesión</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/perfil">Perfil</Link>
        </li>
      </ul> */}
      <div >
      <ul className="ul_nav">
        <li>
          <Link to="/nosotros">Sobre Nosotros</Link>
        </li>
        <li>
          <Link to="/noticias">Noticias</Link>
        </li>
        <li>
          <Link to="/preguntasfrecuentes">Preguntas Frecuentes</Link>
        </li>
        <li className="link_login">
          <Link to="/login">Login</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};