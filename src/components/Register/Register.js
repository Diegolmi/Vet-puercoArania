import React, { useState } from "react";
import { MDBView, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import logo from "../../assets/img/logo.png";
import "./styleRegister.css";
import { Link } from "react-router-dom";
import axiosInstance from "../util/axiosInstance";
import Swal from 'sweetalert2';

const FormsPage = () => {

const [createUser, setCreateUser] = useState({
    username: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
    repassword: ''
})

const inputChange = (e) => {
    setCreateUser({
        ...createUser,
            [e.target.name]: e.target.value
            
    })
}

const crearUsuario = async (e) =>{
    e.preventDefault();
    try {
        const response = await axiosInstance.post('/register', createUser)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registro Exitoso',
            showConfirmButton: false,
            timer: 1500
          })
    } catch (error) {
        console.log(error);
    }
}



    return (
        <>
            <div className="container-fluid containerRegistro">
                <MDBRow>
                    <div className="col-4">
                        <MDBRow>
                            <MDBView hover zoom>
                                <img
                                    src={logo}
                                    className="rounded float-left logoRegister"
                                    alt="aligment"
                                />
                            </MDBView>
                        </MDBRow>
                    </div>
                    <div className="col-8 containerForm1" md="8">
                        <h1 center>Registrate</h1>
                        <MDBRow>
                            <MDBCol md="8">
                                <form onSubmit={crearUsuario}>
                                    <div className="grey-text">
                                        <MDBInput onChange={inputChange} name="username" label="Nombre de Usuario" icon="user" group type="text" validate error="wrong"
                                            success="right" className="form-control" required />

                                        <MDBInput onChange={inputChange} name="name" label="Nombre" icon="user" group type="text" validate error="wrong"
                                            success="right" className="form-control" required />
                                        <MDBInput onChange={inputChange} name="lastname" label="Apellido" icon="user" group type="text" validate error="wrong"
                                            success="right" className="form-control" required />
                                        <MDBInput onChange={inputChange} name="email" label="Email" icon="envelope" group type="email" validate error="wrong"
                                            success="right" className="form-control" required />
                                        <MDBInput onChange={inputChange} name="password" label="Contraseña" icon="lock" group type="password" validate className="form-control" required />
                                        <MDBInput onChange={inputChange} name="repassword" label="Confirmar Contraseña" icon="lock" group type="password" validate className="form-control" required />
                                    </div>
                                    <div className="text-center">
                                        <MDBBtn className="ButtonRegistro" type="submit">
                                            Registrate
                                        <MDBIcon far icon="paper-plane" className="ml-1" />
                                        </MDBBtn>
                                    </div>
                                </form>
                            </MDBCol>
                        </MDBRow>
                                Ya tenes una cuenta?.
                            <Link to={"/Login"} className="enlace-cuenta">
                            Inicia Sesión.
                            </Link>
                    </div>
                </MDBRow>
            </div>
        </>
    );

}

export default FormsPage;
