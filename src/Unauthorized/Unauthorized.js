import React from "react";
import { Link } from "react-router-dom";
import { MdSmsFailed } from "react-icons/md";
import './Unauthorized.css';

const Unauthorized = () => {
  return (
    <div className="unauthorized">
      <MdSmsFailed className="fail-icon" />
      <h1>No tienes los permisos necesarios para ingresar aqui</h1>
      <Link to="/">Volver al Inicio</Link>
    </div>
  );
};

export default Unauthorized;
