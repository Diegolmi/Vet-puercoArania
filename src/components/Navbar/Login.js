import React from "react";
import './styleLogin.css'
import { MDBView, MDBCol, MDBInput, MDBBtn, MDBRow } from 'mdbreact';
import Imglogin from '../../assets/img/gatovet.jpg';
import {Link} from 'react-router-dom';


const FormPage = () => {
return (
<div className="" >
    <MDBRow>
<MDBView  hover zoom >
<img src={Imglogin} className="gato rounded-circle" alt="" />
</MDBView>

  <div className="formstyle" md="8"> 
    <MDBCol >
      <form >
        <p className="h3 text-center mb-4">Ingresá</p>
        <div className="grey-text">
          <MDBInput label="Email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Password" icon="lock" group type="password" validate />
        </div>
        <div className="text-center">
          <MDBBtn>Entrar</MDBBtn>
 
        </div> <br />
        Todavia no tenes cuenta?.
        <Link to={'/registro'} className= "enlace-cuenta">
                Registrate
            </Link>
      </form>
    </MDBCol>
  </div>
  </MDBRow>
  
</div>
);
};

export default FormPage;