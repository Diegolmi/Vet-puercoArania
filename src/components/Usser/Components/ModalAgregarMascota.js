import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axiosInstance from '../../util/axiosInstance';
import Swal from 'sweetalert2';


import "./styleMascotas.css";

const ModalAgregarMascota = ({ show, setShow }) => {

    const [agregarMascota, setAgregarMascota] = useState({
        name: "",
        race: "",
        species: "",
        size: "",
        weigth: ""
    })

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = async e =>  {
        await axiosInstance.post('/mascota', agregarMascota)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Agregaste tu mascota!!',
            showConfirmButton: false,
            timer: 2500
          })



    }

    const handleChange = e => {
        console.log(e);
        setAgregarMascota({

            ...agregarMascota,
            [e.target.name]: e.target.value
            
        })
    }

    

    const handleClose = () => setShow(false);

    return (

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title><h3 >Agregar Mascota</h3></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Nombre</label>
                    <input
                        name="name"
                        onChange={handleChange}
                        className="form-control my-2"
                        ref={register({
                            required: true,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i,
                            placeholder: 'Ingrese un nombre'
                            
                        })} />
                    <span className="">

                        {errors.nombre && "Ingrese un nombre valido"}
                    </span>
                    <br />
                    <label>Raza</label>
                    <input
                        name="race"
                        onChange={handleChange}

                        className="form-control my-2"
                        ref={register({
                            required: true,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i,
                            message: 'Campo Requerido'
                        })} />
                    <span className="">

                        {errors.raza && "Ingrese una raza"}
                    </span>
                    <br />
                    <label>Especie</label>
                    <input
                        name="species"
                        onChange={handleChange}

                        className="form-control my-2"
                        ref={register({
                            required: true,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i,
                            type: "text"

                        })} />
                    <br />
                    <label>Talla</label>
                    <input
                        name="size"
                        onChange={handleChange}

                        className="form-control my-2"
                        ref={register({
                            required: true,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i,
                            type: "text",
                            message: 'Campo Requerido'
                        })} />
                    <span className="">

                        {errors.size && "Ingrese una talla"}
                    </span>
                    <br />
                    <label>Peso</label>
                    <input
                        name="weigth"
                        onChange={handleChange}

                        className="form-control my-2"
                        ref={register({
                            required: false,
                            maxLength: 20,
                            //pattern: /^[A-Za-z]+$/i,
                            message: 'Campo Requerido'
                        })} />
                    <span className="">

                        {errors.weigth && "Ingrese un peso"}
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
}

export default ModalAgregarMascota

