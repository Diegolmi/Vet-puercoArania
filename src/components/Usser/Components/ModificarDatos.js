import React, { useState, useEffect } from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import axiosInstance from "../../util/axiosInstance";

const ModificarDatos = () => {
  const [editarDatos, setEditarDatos] = useState({});

  const handleChange = (e) => {
    setEditarDatos({
      ...editarDatos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity()) {
      await axiosInstance.put(`/private/user`, editarDatos);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get(`/private/userlogged`);
      setEditarDatos(response.data);
    };
    fetchData();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <MDBInput
        onChange={handleChange}
        maxLength="20"
        labelId="username"
        name="username"
        label="Nombre de usuario"

        value={editarDatos.username}

        error="Invalid input"
        success="Success!"
        validate
        group
      />
      <MDBInput
        onChange={handleChange}
        labelId="name"
        name="name"
        label="Nombre"
        type="text"

        value={editarDatos.name}
        

        error="Invalid input"
        success="Success!"
        validate
        group
      />
      <MDBInput
        onChange={handleChange}
        labelId="lastname"
        name="lastname"
        label="Apellido"
        type="text"

        value={editarDatos.lastname}
        

        error="Invalid input"
        success="Success!"
        validate
        group
      />
      <MDBInput
        onChange={handleChange}
        labelId="email"
        name="email"
        label="Email"
        type="email"

        value={editarDatos.email}
        

        error="Invalid input"
        success="Success!"
        validate
        group
      />
      <MDBInput
        onChange={handleChange}
        labelId="tel"
        name="tel"
        label="Numero de telefono"
        type="number"

        value={editarDatos.tel}
        

        error="Invalid input"
        success="Success!"
        validate
        group
      />
      <MDBInput
        onChange={handleChange}
        labelId="address"
        name="address"
        label="Domicilio"

        value={editarDatos.address}
        

        error="Invalid input"
        success="Success!"
        validate
        group
      />
      <MDBInput
        onChange={handleChange}
        labelId="province"
        name="province"
        label="Provincia"

        value={editarDatos.province}

        error="Invalid input"
        success="Success!"
        validate
        group
      />
      <MDBInput
        onChange={handleChange}
        labelId="password"
        name="password"
        label="Contraseña"
        type="password"

        value={editarDatos.password}

        validate
        group
      />
      <MDBBtn type="submit" color="indigo">
        Modificar
      </MDBBtn>
    </form>
  );
};

export default ModificarDatos;
