import React from "react";
import { MDBBtn } from "mdbreact";
import "../Admin.css";

const ListaConsultas = ({ consulta }) => {
  const array = [1, 2, 3];

  return (
    <>
      {array.map((arr) => (
        <MDBBtn
          onClick={consulta}
          className="mensaje-consultas-btn"
          color="secondary"
        >
          Titulo del mensaje
        </MDBBtn>
      ))}
    </>
  );
};

export default ListaConsultas;
