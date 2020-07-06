import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";

const FormCreateAdmin = () => {
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
      <MDBInput label="Confirmar Contraseña" type="password" />
      <select className="browser-default custom-select mb-4">
        <option>Rol</option>
        <option value="1">Administrador</option>
      </select>
      <MDBBtn color="indigo">Crear</MDBBtn>
    </form>
  );
};

export default FormCreateAdmin;
