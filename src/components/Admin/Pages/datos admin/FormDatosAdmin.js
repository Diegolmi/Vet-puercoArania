import React from "react";
import { MDBInput } from "mdbreact";
import "../../Admin.css";
const FormDatosAdmin = ({ usuario, handleSubmit, handleChange }) => {
  return (
    <form className="submit-admin-form">
      <MDBInput
        name="name"
        onChange={handleChange}
        value={usuario.name}
        label="Nombre"
      />
      <MDBInput
        name="lastname"
        onChange={handleChange}
        value={usuario.lastname}
        label="Apellido"
      />
      <MDBInput
        name="username"
        onChange={handleChange}
        value={usuario.username}
        label="Nombre de Usuario"
      />
      <MDBInput
        name="email"
        onChange={handleChange}
        value={usuario.email}
        label="Email"
      />
      <MDBInput
        name="address"
        onChange={handleChange}
        value={usuario.address}
        label="Domicilio"
      />
      <MDBInput
        name="country"
        onChange={handleChange}
        value={usuario.country}
        label="Pais"
      />
      <MDBInput
        name="province"
        onChange={handleChange}
        value={usuario.province}
        label="Provincia"
      />
      <MDBInput
        name="tel"
        onChange={handleChange}
        value={usuario.tel}
        label="Telefono"
      />
      <MDBInput
        name="city"
        onChange={handleChange}
        value={usuario.city}
        label="Ciudad"
      />
      <MDBInput
        name="zip"
        onChange={handleChange}

   // value={usuario.zip}

        label="Codigo Postal"
      />
      <MDBInput
        name="password"
        onChange={handleChange}
        label="Contraseña"
        type="password"
      />
      <button
        className="button-add mr-2"
        type="submit"
        onClick={handleSubmit(usuario)}
      >
        Modificar
      </button>
    </form>
  );
};

export default FormDatosAdmin;
