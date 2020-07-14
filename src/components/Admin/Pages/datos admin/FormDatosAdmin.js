import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";

const FormDatosAdmin = () => {
  return (
    <form>
      <MDBInput label="Nombre" />
      <MDBInput label="Apellido" />
      <MDBInput label="Nombre de Usuario" />
      <MDBInput label="Email" />
      <MDBInput label="Domicilio" />
      <MDBInput label="Pais" />
      <MDBInput label="Provincia" />
      <MDBInput label="Telefono" />
      <MDBInput label="Contraseña" type="password" />
      <MDBBtn color="indigo">Modificar</MDBBtn>
    </form>
  );
};

export default FormDatosAdmin;
