import React, { useState } from "react";
import { MDBView, MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import logo from "../../assets/img/logo.png";
import "./styleRegister.css";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import axiosInstance from "../util/axiosInstance";
import Swal from "sweetalert2";

const FormsPage = () => {
  const history = useHistory();

  const { register, errors, handleSubmit } = useForm();

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

  const onSubmit = async (data) => {

    try {
      await axiosInstance.post("/register", createUser);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Registro Exitoso",
        showConfirmButton: false,
        timer: 1500,
      });
      history.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container-fluid containerRegistro">
        <div className=" containerForm1">
          <h1 className="register-title">
            Registrate
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="formulario-registro"
          >
            <div className="grey-text">
              <MDBInput
                onChange={inputChange}
                name="username"
                label="Nombre de Usuario"
                icon="user"
                group
                type="text"
                className="form-control"
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
              <span className="text-danger text-small">
                {errors.username && errors.username.message}
              </span>
              <MDBInput
                onChange={inputChange}
                name="name"
                label="Nombre"
                icon="user"
                group
                type="text"
                className="form-control"
                 inputRef={register({
                  required: {
                    value: true,
                    message: "ingresa  tu nombre",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "tu nombre no debe contener signos"
                  },
                  maxLength: {
                    value: 15,
                    message: "Maximo 15 caracteres",
                  },
                })}
              />
              
              <span className="text-danger text-small">
                {errors.name && errors.name.message}
              </span>
              <MDBInput
                onChange={inputChange}
                name="lastname"
                label="Apellido"
                icon="user"
                group
                type="text"
                className="form-control"
                inputRef={register({
                  required: {
                    value: true,
                    message: "ingresa  un nombre de apellido",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "tu apellido no debe contener signos"
                  },
                  maxLength: {
                    value: 15,
                    message: "Maximo 15 caracteres",
                  },
                })}
              />
              <span className="text-danger text-small">
                {errors.lastname && errors.lastname.message}
              </span>
              <MDBInput
                onChange={inputChange}
                name="email"
                label="Email"
                icon="envelope"
                group
                type="email"
                className="form-control"

                inputRef={register({
                  required: {
                    value: true,
                    message: "ingresa tu Email",
                  },
                  pattern: {
                    value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                    message: "ingresa un mail valido"
                  },
                  maxLength: {
                    value: 25,
                    message: "Maximo 25 caracteres",
                  },
                })}
              />
              <span className="text-danger text-small">
                {errors.email && errors.email.message}
              </span>
              <MDBInput
                onChange={inputChange}
                name="password"
                label="Contraseña"
                icon="lock"
                group
                type="password"
                className="form-control"
                // maxLength="10"
                // pattern=" /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){4,15}$/"
                inputRef={register({
                  required: {
                    value: true,
                    message: "ingresa tu contraseña",
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
          <p className="register-paragraph">
            con tu registro accedes a todos los beneficios en los productos de
            la tienda
          </p>
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
