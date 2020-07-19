import React, { useState } from "react";
import { MDBView, MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import logo from "../../assets/img/logo.png";
import "./styleRegister.css";
import { Link, useHistory } from "react-router-dom";

import axiosInstance from "../util/axiosInstance";
import Swal from "sweetalert2";

const FormsPage = () => {
  const history = useHistory();

  const [createUser, setCreateUser] = useState({
    username: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
  });

  const inputChange = (e) => {
    setCreateUser({
      ...createUser,
      [e.target.name]: e.target.value,
    });
  };

  const crearUsuario = async (e) => {
    e.preventDefault();
    try {
       await axiosInstance.post("/register", createUser);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Registro Exitoso",
        showConfirmButton: false,
        timer: 1500,
      });
      history.push('/login');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container-fluid containerRegistro">
        <div className=" containerForm1">
          <h1 center className="register-title">Registrate</h1>
          <form onSubmit={crearUsuario} className="formulario-registro">
            <div className="grey-text">
              <MDBInput
                onChange={inputChange}
                name="username"
                label="Nombre de Usuario"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                className="form-control"
                required
              />

              <MDBInput
                onChange={inputChange}
                name="name"
                label="Nombre"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                className="form-control"
                required
              />
              <MDBInput
                onChange={inputChange}
                name="lastname"
                label="Apellido"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                className="form-control"
                required
              />
              <MDBInput
                onChange={inputChange}
                name="email"
                label="Email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                className="form-control"
                required
              />
              <MDBInput
                onChange={inputChange}
                name="password"
                label="Contraseña"
                icon="lock"
                group
                type="password"
                validate
                className="form-control"
                required
              />
              <MDBInput
                onChange={inputChange}
                name="repassword"
                label="Confirmar Contraseña"
                icon="lock"
                group
                type="password"
                validate
                className="form-control"
                required
              />
            </div>
            <div className="text-center">
              <MDBBtn className="ButtonRegistro" type="submit">
                Registrate
                <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
          Ya tenes una cuenta?.
          <Link to={"/Login"} className="enlace-cuenta">
            Inicia Sesión.
          </Link>
        </div>
        <div className="container-img-registro">
            <h2 className="text-welcome">Bienvenido</h2>
            <p className="register-paragraph">con tu registro accedes a todos los beneficios en los productos de la tienda</p>
          <MDBView hover zoom>
            <img
              src={logo}
              className="rounded float-left logoRegister"
              alt="aligment"
            />
          </MDBView>
        </div>
      </div>
    </>
  );
};

export default FormsPage;
