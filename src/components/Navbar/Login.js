import React, { useState } from "react";
import "./styleLogin.css";
import { MDBView, MDBInput, MDBBtn } from "mdbreact";
import Imglogin from "../../assets/img/logo.png";
import { Link, useHistory } from "react-router-dom";
import axiosInstance from "../util/axiosInstance";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FormPage = ({ user, setUser }) => {

  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();

  const [loguearUsuario, setLoguearUsuario] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setLoguearUsuario({
      ...loguearUsuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (data) => {
    try {
      const result = await axiosInstance.post("/login", loguearUsuario);
      if (result.data.role !== "admin") {
        localStorage.setItem("jwt", result.data.token);
        localStorage.setItem("role", result.data.role);
        const toggleDarkMode = () => {
          setUser(loguearUsuario.username);
          
        };
        toggleDarkMode();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Logueo Exitoso',
          showConfirmButton: false,
          timer: 1500
        })

        history.push("/usuario");
      } else {
        localStorage.setItem("jwt", result.data.token);
        localStorage.setItem("role", result.data.role);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Logueo Exitoso',
          showConfirmButton: false,
          timer: 1500
        })
        history.push("/admin");
      }
    } catch (error) {
      setError(error);
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
        <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
          <p className="h3 text-center mb-4">Ingresá</p>
          <div className="grey-text">
            <MDBInput
              onChange={handleChange}
              name="username"
              label="Nombre de usuario"
              icon="user"
              group
              type="text"
              inputRef={register({
                required: {
                  value: true,
                  message: "ingresa  un nombre de usuario",
                },
                maxLength: {
                  value: 15,
                  message: "Maximo 15 caracteres",
                },
              })}
              
            />
            {error ? (<span className="text-danger text-small">usuario y/o contraseña incorrecta</span>) : (<span className="text-danger text-small">{errors.username && errors.username.message}</span>) }
              
              
            <MDBInput
              onChange={handleChange}
              name="password"
              label="Password"
              icon="lock"
              group
              type="password"
              inputRef={register({
                required: {
                  value: true,
                  message: "ingresa una contraseña correcta",
                },
                maxLength: {
                  value: 20,
                  message: "Maximo 20 caracteres",
                },
              })}
            />
            <span className="text-danger text-small">
                {errors.password && errors.password.message}
              </span>
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
