import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import logo from '../../assets/img/logo.png';
import './styleRegister.css';
import FooterAdmin from '../Admin/FooterAdmin';
import {Link} from 'react-router-dom';


class FormsPage extends React.Component {
    state = {
        fname: "",
        lname: "",
        email: "",
        city: "",
        state: "",
        contraseña: "",
        repContraseña: ""
    };

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
           <>
            <div className='container-fluid container-registro'>
                <h1 center className="my-5">Registrate</h1>
                <div className='row'>
                    <div className='col-4'>
                        <MDBRow>
                            <MDBCol>
                                <img src={logo} className="rounded float-left logoRegister" alt="aligment" />
                            </MDBCol>
                        </MDBRow>
                    </div>
                    <div className='col-8'>
                        <form
                            className="needs-validation"
                            onSubmit={this.submitHandler}
                            noValidate
                        >
                            <MDBRow >
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
                            <small id="emailHelp" className="form-text text-muted">
                                
              </small>
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
                        </form>
                        Ya tenes una cuenta?.
                        <Link to={'/Login'} className= "enlace-cuenta">
                Inicia Sesión.
            </Link>
                    </div>


                </div>
            </div>
            <FooterAdmin />
           </>
        );
    }
}

export default FormsPage;