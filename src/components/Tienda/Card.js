import React from "react";
import {MDBCol,MDBContainer } from "mdbreact";
import { Link } from 'react-router-dom';
import "./Tienda.css";

const Promo = () => {
  return (
    <MDBCol>
    <div id="hola" className="footer-copyright text-center">
    <MDBContainer fluid>
      &copy; {new Date().getFullYear()} Copyright  <Link to="/"> PuercoAraña.com </Link>
    </MDBContainer>
       
  </div>
    </MDBCol>


  );
};

export default Promo;
