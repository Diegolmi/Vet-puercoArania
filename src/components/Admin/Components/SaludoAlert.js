import React, { useState, useEffect } from "react";
import { MDBContainer, MDBAlert } from "mdbreact";
import "../Admin.css";
import axiosInstance from "../../util/axiosInstance";

const SaludoAlert = () => {
  const [usuario, setUsuario] = useState([]);

  const traerUsuarios = async () => {
    const response = await axiosInstance.get("/private/userlogged");
    setUsuario(response.data);
  };

  useEffect(() => {
    traerUsuarios();
  }, []);
  const { name, lastname } = usuario;

  return (
    <MDBContainer className="container-saludo">
      <MDBAlert color="primary">
        {/* {usuario.map(user =>(
          ))} */}
        <h3>
          Bienvenido {name} {lastname}
        </h3>
      </MDBAlert>
    </MDBContainer>
  );
};

export default SaludoAlert;
