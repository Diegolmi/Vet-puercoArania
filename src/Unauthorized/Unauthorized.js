import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <>
      <h1>No tienes los permisos necesarios para ingresar aqui</h1>
      <Link to="/">Volver al Inicio</Link>
    </>
  );
};

export default Unauthorized;
