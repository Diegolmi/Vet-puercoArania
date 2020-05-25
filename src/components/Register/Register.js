import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import logo from '../../assets/img/logo.png';
import './styleRegister.css';

class FormsPage extends React.Component {
    state = {
        fname: "Diego",
        lname: "Olmi",
        email: "",
        city: "",
        state: "",
        zip: ""
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
            <div className='container'>
                <h1 center>Registrate</h1>
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
                                <MDBCol md="3" className="mb-3">
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
                                        placeholder="First name"
                                        required
                                    />
                                    <div className="valid-feedback">Correcto</div>
                                </MDBCol>
                                <MDBCol md="3" className="mb-3">
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
                                        placeholder="Last name"
                                        required
                                    />
                                    <div className="valid-feedback">Correcto</div>
                                </MDBCol>
                                <MDBCol md="3" className="mb-3">
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
                                        placeholder="Ingrese su Email"
                                    />
                                    <small id="emailHelp" className="form-text text-muted">
                                        We'll never share your email with anyone else.
                                 </small>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="3" className="mb-3">
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
                                        ingrese una ciudad valida
                                </div>
                                    <div className="valid-feedback">Correcto</div>
                                </MDBCol>
                                <MDBCol md="3" className="mb-3">
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
                                        Ingrese una provincia valida
                                </div>
                                    <div className="valid-feedback">Correcto</div>
                                </MDBCol>
                                <MDBCol md="4" className="mb-3">
                                    <label
                                        htmlFor="defaultFormRegisterPasswordEx4"
                                        className="grey-text">
                                        Codigo Postal
                                </label>
                                    <input
                                        value={this.state.zip}
                                        onChange={this.changeHandler}
                                        type="text"
                                        id="defaultFormRegisterPasswordEx4"
                                        className="form-control"
                                        name="Codigo Postal"
                                        placeholder="Zip"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Ingrese un codigo postal valido
                                </div>
                                    <div className="valid-feedback"></div>
                                </MDBCol>
                            </MDBRow>
                            <MDBCol md="3" className="mb-3">
                                <div className="custom-control custom-checkbox pl-3">
                                    <input
                                        className="custom-control-input"
                                        type="checkbox"
                                        value=""
                                        id="invalidCheck"
                                        required
                                    />
                                    <label className="custom-control-label" htmlFor="invalidCheck">
                                        Acepte los terminos y condiciones
                                </label>
                                    <div className="invalid-feedback">
                                        Debe aceptar antes de enviar
                                </div>
                                </div>
                            </MDBCol>
                            <MDBBtn color="primary" type="submit">
                                Registrarse 
                         </MDBBtn>
                        </form>
                    </div>


                </div>
            </div>
        );
    }
}

export default FormsPage;