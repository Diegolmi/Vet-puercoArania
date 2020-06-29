import React from "react";
import { MDBCardImage, MDBCol,MDBContainer } from "mdbreact";
import { Link } from 'react-router-dom';
import "./Tienda.css";

const Promo = () => {
  return (
    <MDBCol>
      <MDBCardImage
        className="propaganda "
        src="http://d26lpennugtm8s.cloudfront.net/stores/001/142/477/themes/amazonas/slide-1592579878457-4544222258-536b151d6abcd63cc82f8f8c46b355b91592579879-1920-1920.jpg?118976044"
      ></MDBCardImage>
   
    <div id="hola" className="footer-copyright text-center">
    <MDBContainer fluid>
      &copy; {new Date().getFullYear()} Copyright  <Link to="/"> PuercoAraña.com </Link>
    </MDBContainer>
       
  </div>
    </MDBCol>


  );
};

export default Promo;
