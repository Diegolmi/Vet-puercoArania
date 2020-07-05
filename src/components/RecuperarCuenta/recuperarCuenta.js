import React, { useState } from "react";
// import "./styleLogin.css";
import { MDBView, MDBCol, MDBInput, MDBBtn, MDBRow } from "mdbreact";
import Imglogin from "../../assets/img/gatovet.jpg";
import { Link, useHistory } from "react-router-dom";
import axiosInstance from "../util/axiosInstance";

const RecuperaUsuario = () => {
  // const history = useHistory();
  const [recuperarUsuario, setRecuperarUsuario] = useState({
    email: "",
  });
  const handleChange = (e) => {
    setRecuperarUsuario({
      ...recuperarUsuario,
      [e.target.name]: e.target.value,
    });
  };
  const loginRecupera = async (e) => {
    e.preventDefault();
    try {
      const result = await axiosInstance.post("/email", recuperarUsuario);
      console.log(result);
      if (result.data.token) {
        localStorage.setItem("jwt", result.data.token);
        localStorage.setItem("role", result.data.role);
        // history.push("/privado/usuario");
      }
    } catch (error) {
      console.log(error);
      console.log("no estas registrado");
    }
  };
  return (
    <div className="">
      <MDBRow>
        <MDBView hover zoom>
          <img src={Imglogin} className="gato rounded-circle" alt="" />
        </MDBView>
        <div className="formstyle" md="5">
          <MDBCol>
            <form onSubmit={loginRecupera}>
              <p className="h3 text-center mb-4">
                Ingresá tu dirección de Correo para recuperar tu usuario y
                contraseña
              </p>
              <br />
              <div className="grey-text">
                <MDBInput
                  onChange={handleChange}
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
              </div>
              <div className="text-center">
                <MDBBtn type="submit">Enviar</MDBBtn>
              </div>{" "}
              <br />
              Te enviaremos una clave provisoria
            </form>
          </MDBCol>
        </div>
      </MDBRow>
    </div>
  );
};

export default RecuperaUsuario;
