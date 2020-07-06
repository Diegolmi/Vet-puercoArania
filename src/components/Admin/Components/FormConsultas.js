import React from "react";
import { MDBInput, MDBCol, MDBBtn } from "mdbreact";

const FormConsultas = ({ cerrarConsulta }) => {
  return (
    <div>
      <form>
        <MDBCol md="12">
          <MDBInput label="Nombre " required />
        </MDBCol>
        <MDBCol md="12">
          <MDBInput label="Apellido" required />
        </MDBCol>
        <MDBCol md="12">
          <MDBInput label="Email" type="email" required />
        </MDBCol>
        <MDBCol md="12">
          <MDBInput label="Telefono" type="number" required />
        </MDBCol>

        <MDBCol md="12">
          <MDBInput type="textarea" label="Consulta" rows="5" />
        </MDBCol>
        <MDBBtn outline color="primary">
          Responder
        </MDBBtn>
        <MDBBtn outline color="secondary" onClick={cerrarConsulta}>
          Cerrar
        </MDBBtn>
      </form>
    </div>
  );
};

export default FormConsultas;
