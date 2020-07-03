import React, { useState } from 'react';
import { MDBInput, MDBBtn } from "mdbreact";
import axiosInstance from '../../util/axiosInstance';

const ModificarDatos = () => {
    const [editarDatos, setEditarDatos] = useState({
        username: '',
        name: '',
        lastname: '',
        email: '',
        password: '',
        repassword: '',
        address: ''
    })

    const handleChange = e => {
        setEditarDatos({
            ...editarDatos,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = id => async e => {
        e.preventDefault();
        const result = await axiosInstance.put(`/private/user/${id}`, editarDatos);
        console.log(result)
    }

    return (
        <form onSubmit={handleSubmit}>
            <MDBInput onChange={handleChange} name="username" label="Nombre de usuario" required error="wrong" success="right" validate group />
            <MDBInput onChange={handleChange} name="name" label="Nombre" type="text" required error="wrong" success="right" validate group />
            <MDBInput onChange={handleChange} name="lastname" label="Apellido" type="text" required error="wrong" success="right" validate group />
            <MDBInput onChange={handleChange} name="email" label="Email" type="email" required error="wrong" success="right" validate group />
            <MDBInput onChange={handleChange} name="address" label="Domicilio" required error="wrong" success="right" validate group />
            <MDBInput onChange={handleChange} name="password" label="Contraseña" type="password" required validate group />
            <MDBInput onChange={handleChange} name="repassword" label="Confirmar Contraseña" type="password" required validate group />
            <MDBBtn type="button" color="indigo">Modificar</MDBBtn>
        </form>
    );
}

export default ModificarDatos;