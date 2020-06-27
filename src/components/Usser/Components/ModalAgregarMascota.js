import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

import './styleMascotas.css';

const ModalAgregarMascota = ({ show, setShow }) => {
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset()

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
                        name="nombre"
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
                        name="raza"
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
                        name="especie"
                        className="form-control my-2"
                        ref={register({
                            required: true,
                            maxLength: 3,
                            pattern: /^[A-Za-z]+$/i,
                            type: "text"

                        })} />
                        <br />
                    <label>Talla</label>
                    <input
                        name="talla"
                        className="form-control my-2"
                        ref={register({
                            required: false,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i,
                            message: 'Campo Requerido'
                        })} />
                    <span className="">

                        {errors.raza && "Ingrese una talla"}
                    </span>
                    <br />
                    <label>Peso</label>
                    <input
                        name="raza"
                        className="form-control my-2"
                        ref={register({
                            required: false,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i,
                            message: 'Campo Requerido'
                        })} />
                    <span className="">

                        {errors.raza && "Ingrese un peso"}
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

