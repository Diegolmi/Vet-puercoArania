import React, { useState } from "react";
import { MDBView, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import logo from "../../assets/img/logo.png";
import "./styleRegister.css";
import { Link } from "react-router-dom";
import axiosInstance from "../util/axiosInstance";


const FormsPage = () => {

const [createUser, setCreateUser] = useState({
    username: '',
    firstname: '',
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
        console.log(response);
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
                        {/* <form
                                className="needs-validation"
                                onSubmit={this.submitHandler}
                                noValidate
                            >
                                <MDBRow>
                                    <MDBCol md="4" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterNameEx"
                                            className="grey-text"
                                        >
                                            Nombre
                                        </label>
                                        <input
                                            value={this.state.fname}
                                            name="fname"
                                            onChange={this.changeHandler}
                                            type="text"
                                            id="defaultFormRegisterNameEx"
                                            className="form-control"
                                            placeholder="Nombre"
                                            required
                                        />
                                        <div className="valid-feedback">Que buen nombre!!</div>
                                    </MDBCol>

                                    <MDBCol md="4" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterEmailEx2"
                                            className="grey-text"
                                        >
                                            Apellido
                                        </label>
                                        <input
                                            value={this.state.lname}
                                            name="lname"
                                            onChange={this.changeHandler}
                                            type="text"
                                            id="defaultFormRegisterEmailEx2"
                                            className="form-control"
                                            placeholder="Apellido"
                                            required
                                        />
                                        <div className="valid-feedback">ok!</div>
                                    </MDBCol>
                                    <MDBCol md="4" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterConfirmEx3"
                                            className="grey-text"
                                        >
                                            Email
                                        </label>
                                        <input
                                            value={this.state.email}
                                            onChange={this.changeHandler}
                                            type="email"
                                            id="defaultFormRegisterConfirmEx3"
                                            className="form-control"
                                            name="email"
                                            placeholder="Tu Email"
                                        />
                                        <small
                                            id="emailHelp"
                                            className="form-text text-muted"
                                        ></small>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="4" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterPasswordEx4"
                                            className="grey-text"
                                        >
                                            Ciudad
                                        </label>
                                        <input
                                            value={this.state.city}
                                            onChange={this.changeHandler}
                                            type="text"
                                            id="defaultFormRegisterPasswordEx4"
                                            className="form-control"
                                            name="city"
                                            placeholder="Ciudad"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Escribe una ciudad valida
                                        </div>
                                        <div className="valid-feedback">Bella Ciudad!</div>
                                    </MDBCol>
                                    <MDBCol md="4" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterPasswordEx4"
                                            className="grey-text"
                                        >
                                            Provincia
                                        </label>
                                        <input
                                            value={this.state.state}
                                            onChange={this.changeHandler}
                                            type="text"
                                            id="defaultFormRegisterPasswordEx4"
                                            className="form-control"
                                            name="state"
                                            placeholder="Provincia"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Escribe una provincia valida.
                                        </div>
                                        <div className="valid-feedback">Valida</div>
                                    </MDBCol>
                                    <MDBCol md="4" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterPasswordEx4"
                                            className="grey-text"
                                        >
                                            Contraseña
                                        </label>
                                        <input
                                            value={this.state.contraseña}
                                            onChange={this.changeHandler}
                                            type="password"
                                            id="defaultFormRegisterPasswordEx4"
                                            className="form-control"
                                            name="contraseña"
                                            placeholder="Contraseña"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Escribe una contraseña valida
                                        </div>
                                        <div className="valid-feedback">Valido</div>
                                    </MDBCol>
                                </MDBRow>
                                <MDBCol md="4" className="mb-3">
                                    <label
                                        htmlFor="defaultFormRegisterPasswordEx4"
                                        className="grey-text"
                                    >
                                        Confirme Contraseña
                                    </label>
                                    <input
                                        value={this.state.repContraseña}
                                        onChange={this.changeHandler}
                                        type="password"
                                        id="defaultFormRegisterPasswordEx4"
                                        className="form-control"
                                        name="repContraseña"
                                        placeholder="Confirme Contraseña"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Escribe una contraseña valida
                                    </div>
                                    <div className="valid-feedback">Valido</div>
                                </MDBCol>
                                <MDBBtn className="ButtonRegistro" type="submit">
                                    Registrate
                                </MDBBtn>
                            </form> */}
                        <MDBRow>
                            <MDBCol md="8">
                                <form onSubmit={crearUsuario}>
                                    <div className="grey-text">
                                        <MDBInput onChange={inputChange} name="username" label="Nombre de Usuario" icon="user" group type="text" validate error="wrong"
                                            success="right" className="form-control" required />

                                        <MDBInput onChange={inputChange} name="firstname" label="Nombre" icon="user" group type="text" validate error="wrong"
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
