import React, { useState, useEffect } from 'react';
import { MDBInput, MDBBtn } from "mdbreact";
import axiosInstance from '../../util/axiosInstance';

const ModificarDatos = () => {
    const [editarDatos, setEditarDatos] = useState({})

    const handleChange = e => {
        setEditarDatos({
            ...editarDatos,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async event => {
        const form = event.target
        if (form.checkValidity()) {
            await axiosInstance.put(`/private/user`, editarDatos)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosInstance.get(`/private/userlogged`)
            setEditarDatos(response.data)
        }
        fetchData()
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <MDBInput onChange={handleChange} labelId="username" name="username" label="Nombre de usuario" required error="Invalid input" success="Success!" validate group />
            <MDBInput onChange={handleChange} labelId="name" name="name" label="Nombre" type="text" required error="Invalid input" success="Success!" validate group />
            <MDBInput onChange={handleChange} labelId="lastname" name="lastname" label="Apellido" type="text" required error="Invalid input" success="Success!" validate group />
            <MDBInput onChange={handleChange} labelId="email" name="email" label="Email" type="email" required error="Invalid input" success="Success!" validate group />
            <MDBInput onChange={handleChange} labelId="tel" name="tel" label="Numero de telefono" type="number" required error="Invalid input" success="Success!" validate group />
            <MDBInput onChange={handleChange} labelId="address" name="address" label="Domicilio" required error="Invalid input" success="Success!" validate group />
            <MDBInput onChange={handleChange} labelId="password" name="password" label="Contraseña" type="password" required validate group />
            <MDBInput onChange={handleChange} labelId="repassword" name="repassword" label="Confirmar Contraseña" type="password" required validate group />
            <MDBBtn type="submit" color="indigo">Modificar</MDBBtn>
        </form>
    );
}

export default ModificarDatos;
