import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter , MDBBtn,MDBAnimation} from "mdbreact";
import { Link } from 'react-router-dom';

const FooterAdmin = () => {
    return ( 
        <div id="hola" className="footer-copyright text-center">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright  <Link to="/"> PuercoAraña.com </Link>
        </MDBContainer>
      </div>
     );
}
 
export default FooterAdmin;