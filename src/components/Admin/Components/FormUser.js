import React, { useState } from "react";
import { MDBBtn, MDBInput } from "mdbreact";
import axiosInstance from "../../util/axiosInstance";

const FormUser = ({ userById, listarUsuarios }) => {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    username: "",
    email: "",
    address: "",
    country: "",
    province: "",
    city: "",
    zip: "",
    tel: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axiosInstance.put(`/private/user/any`, user);
    listarUsuarios();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <MDBInput
          onChange={handleChange}
          name="name"
          label="Nombre"
          value={userById.name}
        />
        <MDBInput
          onChange={handleChange}
          name="lastname"
          label="Apellido"
          value={userById.lastname}
        />
        <MDBInput
          onChange={handleChange}
          name="username"
          label="Nombre de usuario"
          value={userById.username}
        />
        <MDBInput
          onChange={handleChange}
          name="email"
          label="Email"
          value={userById.email}
        />
        <MDBInput
          onChange={handleChange}
          name="address"
          label="Domicilio"
          value={userById.address}
        />
        <MDBInput
          onChange={handleChange}
          name="country"
          label="Pais"
          value={userById.country}
        />
        <MDBInput
          onChange={handleChange}
          name="province"
          label="Provincia"
          value={userById.province}
        />
        <MDBInput
          onChange={handleChange}
          name="city"
          label="Ciudad"
          value={userById.city}
        />
        <MDBInput
          onChange={handleChange}
          name="zip"
          label="Codigo Postal"
          value={userById.zip}
        />
        <MDBInput
          onChange={handleChange}
          name="tel"
          label="Telefono"
          value={userById.tel}
        />
        <MDBInput
          onChange={handleChange}
          name="password"
          label="Contraseña"
          type="password"
        />
        <select
          onChange={handleChange}
          name="role"
          className="browser-default custom-select mb-4"
        >
          <option>Rol</option>
          <option value="admin">Administrador</option>
          <option value="user">Usuario</option>
        </select>
        <MDBBtn type="submit" color="indigo">
          Modificar
        </MDBBtn>
      </form>
    </div>
  );
};

export default FormUser;
