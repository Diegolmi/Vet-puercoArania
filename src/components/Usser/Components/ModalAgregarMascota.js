import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axiosInstance from "../../util/axiosInstance";
import Swal from "sweetalert2";

import "./styleMascotas.css";

const ModalAgregarMascota = ({ show, setShow }) => {
  const [agregarMascota, setAgregarMascota] = useState({
    name: "",
    race: "",
    species: "",
    size: "",
    weigth: "",
  });

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = async (e) => {
    await axiosInstance.post("/mascota", agregarMascota);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Agregaste tu mascota!!",
      showConfirmButton: false,
      timer: 2500,
    });
  };

  const handleChange = (e) => {
    //console.log(e);
    setAgregarMascota({
      ...agregarMascota,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h3>Agregar Mascota</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="form-control my-2"
            ref={register({
              required: {
                value: true,
                message: "campo Obligatorio",
              },
              maxLength: 20,
              pattern: { value: /^[A-Za-z]+$/i },
            })}
          />
          <span className="text-danger text-small">
            {errors.name && errors.name.message}
          </span>
          <br />
          <label>Raza</label>
          <input
            name="race"
            onChange={handleChange}
            type="text"
            className="form-control my-2"
            ref={register({
              required: {
                value: true,
                message: "Campo Requerido",
              },
              maxLength: {
                value: 20,
                message: "Maximo 20 caracteres",
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
              },
            })}
          />
          <span className="text-danger text-small">
            {errors.race && errors.race.message}
          </span>
          <br />
          <label>Especie</label>
          <input
            name="species"
            onChange={handleChange}
            type="text"
            className="form-control my-2"
            ref={register({
              required: {
                value: true,
                message: "Campo Requerido",
              },
              maxLength: {
                value: 20,
                message: "Maximo 20 caracteres",
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
              },
            })}
          />
          <span className="text-danger text-small">
            {errors.species && errors.species.message}
          </span>
          <br />
          <label>Talla</label>
          <input
            name="size"
            onChange={handleChange}
            type="text"
            className="form-control my-2"
            ref={register({
              required: {
                value: true,
                message: "Campo Requerido",
              },
              maxLength: {
                value: 20,
                message: "Maximo 20 caracteres",
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
              },
            })}
          />
          <span className="text-danger text-small">
            {errors.size && errors.size.message}
          </span>
          <br />
          <label>Peso</label>
          <input
            name="weigth"
            onChange={handleChange}
            type="number"
            className="form-control my-2"
            ref={register({
              required: {
                value: true,
                message: "Campo Requerido",
              },
              maxLength: {
                value: 20,
                message: "Maximo 20 caracteres",
              },
            })}
          />
          <span className="text-danger text-small">
            {errors.weigth && errors.weigth.message}
          </span>

          <Button variant="secondary" type="submit">
            Guardar Cambios
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalAgregarMascota;
