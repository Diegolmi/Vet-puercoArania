import React, { useState } from "react";
import { MDBBtn, MDBInput } from "mdbreact";
import axiosInstance from "../../util/axiosInstance";
import '../Admin.css';
import Swal from 'sweetalert2';

const FormUser = ({ listarUsuarios, handleClose }) => {
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
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    await axiosInstance.post('/private/user', user);
    listarUsuarios();
    handleClose()
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <MDBInput
          onChange={handleChange}
          name="name"
          label="Nombre"
        />
        <MDBInput
          onChange={handleChange}
          name="lastname"
          label="Apellido"
        />
        <MDBInput
          onChange={handleChange}
          name="username"
          label="Nombre de usuario"
        />
        <MDBInput
          onChange={handleChange}
          name="email"
          label="Email"
        />
        <MDBInput
          onChange={handleChange}
          name="address"
          label="Domicilio"
        />
        <MDBInput
          onChange={handleChange}
          name="country"
          label="Pais"
        />
        <MDBInput
          onChange={handleChange}
          name="province"
          label="Provincia"
        />
        <MDBInput
          onChange={handleChange}
          name="city"
          label="Ciudad"
        />
        <MDBInput
          onChange={handleChange}
          name="zip"
          label="Codigo Postal"
        />
        <MDBInput
          onChange={handleChange}
          name="tel"
          label="Telefono"
        />
        <MDBInput
          onChange={handleChange}
          name="password"
          label="Contraseña"
          type="password"
        />
        {/* <select
          onChange={handleChange}
          name="role"
          className="browser-default custom-select mb-4"
        >
          <option>Rol</option>
          <option value="admin">Administrador</option>
          <option value="user">Usuario</option>
        </select> */}
        <button type="submit" className="button-add">
          Crear Usuario
        </button>
      </form>
    </div>
  );
};

export default FormUser;
