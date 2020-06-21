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
                    <input
                        name="nombre"
                        className="form-control my-2"
                        ref={register({
                            required: true,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i,
                            message: 'Campo Requerido'
                        })} />
                    <span className="">

                        {errors.nombre && "Ingrese un nombre"}
                    </span>
                    {/*<span className="text-danger text-small d-block mb-2">
                        {errors?.nombre?.message}
                    </span>*/}
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
                    <input
                        name="años"
                        className="form-control my-2"
                        ref={register({
                            required: true,
                            maxLength: 20,
                            pattern: /^([0-9])*$/,
                            message: 'Campo Requerido'
                        })} />
                    <span className="">

                        {errors.años && "Ingrese solo numeros"}
                    </span>
                    <Button variant="secondary" type="submit">
                        Guardar Cambios
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                     </Button>

                </form>
            </Modal.Body>
            <Modal.Footer>


            </Modal.Footer>
        </Modal>

    );
}

export default ModalAgregarMascota