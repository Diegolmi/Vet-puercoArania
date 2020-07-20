import React from "react";
<<<<<<< HEAD
import {MDBCol,MDBContainer } from "mdbreact";
import { Link } from 'react-router-dom';
=======
import { MDBCol, MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";
>>>>>>> 4de8003f8c0e181d261780caa69c1fdb5a3b6084
import "./Tienda.css";

const Promo = () => {
  return (
    <MDBCol>
<<<<<<< HEAD
    <div id="hola" className="footer-copyright text-center">
    <MDBContainer fluid>
      &copy; {new Date().getFullYear()} Copyright  <Link to="/"> PuercoAraña.com </Link>
    </MDBContainer>
       
  </div>
=======
      <div id="hola" className="footer-copyright text-center">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright{" "}
          <Link to="/"> PuercoAraña.com </Link>
        </MDBContainer>
      </div>
>>>>>>> 4de8003f8c0e181d261780caa69c1fdb5a3b6084
    </MDBCol>
  );
};

export default Promo;
