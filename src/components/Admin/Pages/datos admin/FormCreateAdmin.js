import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import '../../Admin.css';

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
      <button className="button-add mr-2">Crear</button>
    </form>
  );
};

export default FormCreateAdmin;
