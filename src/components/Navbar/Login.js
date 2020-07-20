import React, { useState } from "react";
import "./styleLogin.css";
import { MDBView, MDBInput, MDBBtn } from "mdbreact";
import Imglogin from "../../assets/img/logo.png";
import { Link, useHistory } from "react-router-dom";
import axiosInstance from "../util/axiosInstance";

const FormPage = ({ user, setUser }) => {
  const history = useHistory();
  const [loguearUsuario, setLoguearUsuario] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoguearUsuario({
      ...loguearUsuario,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const result = await axiosInstance.post("/login", loguearUsuario);
      if (result.data.role !== "admin") {
        localStorage.setItem("jwt", result.data.token);
        localStorage.setItem("role", result.data.role);
        const toggleDarkMode = () => {
          setUser(loguearUsuario.username);
        };
        toggleDarkMode();

        history.push("/usuario");
      } else {
        localStorage.setItem("jwt", result.data.token);
        localStorage.setItem("role", result.data.role);

        history.push("/admin");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-login">
      <div className="contenedor-imagen-login">
          <p className="login-paragraph">Inicia Sesión</p>
        <MDBView hover zoom>
          <img src={Imglogin} className="gato" alt="" />
        </MDBView>
      </div>

      <div className="formstyle" md="8">
        <form className="form-login" onSubmit={loginUser}>
          <p className="h3 text-center mb-4">Ingresá</p>
          <div className="grey-text">
            <MDBInput
              onChange={handleChange}
              name="username"
              label="Nombre de usuario"
              icon="user"
              group
              type="text"
              validate
              error="wrong"
              success="right"
            />
            <MDBInput
              onChange={handleChange}
              name="password"
              label="Password"
              icon="lock"
              group
              type="password"
              validate
            />
          </div>
          <div className="text-center">
            <MDBBtn type="submit">Entrar</MDBBtn>
          </div>{" "}
          <br />
          <div className="text-center">
            <Link to={"/recuperarCuenta"} className="btn-secondary">
              Olvidaste tu Usuario o contraseña
            </Link>
          </div>
          <br />
          Todavia no tenes cuenta?.
          <Link to={"/registro"} className="enlace-cuenta">
            Registrate
          </Link>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
