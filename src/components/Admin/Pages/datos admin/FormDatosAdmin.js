import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";

const FormDatosAdmin = () => {
  return (
    <form>
      <MDBInput label="Nombre" />
      <MDBInput label="Apellido" />
      <MDBInput label="Email" />
      <MDBInput label="Domicilio" />
      <MDBInput label="Contraseña" type="password" />
      <MDBInput label="Confirmar Contraseña" type="password" />
      <MDBBtn color="indigo">Modificar</MDBBtn>
    </form>
  );
};

export default FormDatosAdmin;
