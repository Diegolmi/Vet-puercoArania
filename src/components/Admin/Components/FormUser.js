import React, { useState } from "react";
import { MDBInput } from "mdbreact";
import axiosInstance from "../../util/axiosInstance";
import "../Admin.css";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const FormUser = ({ listarUsuarios, handleClose }) => {
  const { register, errors, handleSubmit } = useForm();
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

  const onSubmit = async (data) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    await axiosInstance.post("/private/user", user);
    listarUsuarios();
    handleClose();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <MDBInput
            onChange={handleChange}
            name="name"
            label="Nombre"
            inputRef={register({
              required: {
                value: true,
                message: "El Nombre es requerido",
              },
              maxLength: {
                value: 15,
                message: "No más de 15 carácteres!",
              },
              minLength: {
                value: 6,
                message: "Mínimo 6 carácteres",
              },
            })}
          />
          <span className="text-danger text-small">
            {errors.name && errors.name.message}
          </span>
          <MDBInput
            onChange={handleChange}
            name="lastname"
            label="Apellido"
            inputRef={register({
              required: {
                value: true,
                message: "El Apellido es requerido",
              },
              maxLength: {
                value: 15,
                message: "No más de 15 carácteres!",
              },
              minLength: {
                value: 6,
                message: "Mínimo 6 carácteres",
              },
            })}
          />
          <span className="text-danger text-small">
            {errors.lastname && errors.lastname.message}
          </span>
          <MDBInput
            onChange={handleChange}
            name="username"
            label="Nombre de usuario"
            inputRef={register({
              required: {
                value: true,
                message: "El Nombre de Usuario es requerido",
              },
              maxLength: {
                value: 15,
                message: "No más de 15 carácteres!",
              },
              minLength: {
                value: 6,
                message: "Mínimo 6 carácteres",
              },
            })}
          />
          <span className="text-danger text-small">
            {errors.username && errors.username.message}
          </span>
          <MDBInput
            onChange={handleChange}
            name="email"
            label="Email"
            inputRef={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "El Email es requerido",
              },
            })}
          />
          <span className="text-danger text-small">
            {errors.email && errors.email.message}
          </span>
          <MDBInput
            onChange={handleChange}
            name="address"
            label="Domicilio"
            inputRef={register({
              required: {
                value: true,
                message: "La Dirección es requerida",
              },
            })}
          />
          <span className="text-danger text-small">
            {errors.address && errors.address.message}
          </span>
          <MDBInput
            onChange={handleChange}
            name="country"
            label="Pais"
            inputRef={register({
              required: {
                value: true,
                message: "El Pais es requerida",
              },
            })}
          />
          <span className="text-danger text-small">
            {errors.country && errors.country.message}
          </span>
          <MDBInput
            onChange={handleChange}
            name="province"
            label="Provincia"
            inputRef={register({
              required: {
                value: true,
                message: "La Provincia es requerida",
              },
            })}
          />
          <span className="text-danger text-small">
            {errors.province && errors.province.message}
          </span>
          <MDBInput
            onChange={handleChange}
            name="city"
            label="Ciudad"
            inputRef={register({
              required: {
                value: true,
                message: "La Ciudad es requerida",
              },
            })}
          />
          <span className="text-danger text-small">
            {errors.city && errors.city.message}
          </span>
          <MDBInput
            onChange={handleChange}
            name="zip"
            label="Codigo Postal"
            inputRef={register({
              required: {
                value: true,
                message: " El Codigo Postal es requerida",
              },
            })}
          />
          <span className="text-danger text-small">
            {errors.zip && errors.zip.message}
          </span>
          <MDBInput
            onChange={handleChange}
            name="tel"
            label="Telefono"
            inputRef={register({
              required: {
                value: true,
                message: " El Telefono es requerida",
              },
            })}
          />
          <span className="text-danger text-small">
            {errors.tel && errors.tel.message}
          </span>
          <MDBInput
            onChange={handleChange}
            name="password"
            label="Contraseña"
            type="password"
            inputRef={register({
              required: {
                value: true,
                message: " La Contraseña es obligatoria",
              },
              maxLength: {
                value: 20,
                message: "No más de 20 carácteres!",
              },
              minLength: {
                value: 6,
                message: "Mínimo 6 carácteres",
              },
            })}
          />
          <span className="text-danger text-small mb-2">
            {errors.password && errors.password.message}
          </span>
        </div>
        {/* <select
          onChange={handleChange}
          name="role"
          className="browser-default custom-select mb-4"
        >
          <option>Rol</option>
          <option value="admin">Administrador</option>
          <option value="user">Usuario</option>
        </select> */}
        <button type="submit" className="button-add mt-2">
          Crear Usuario
        </button>
      </form>
    </div>
  );
};

export default FormUser;
