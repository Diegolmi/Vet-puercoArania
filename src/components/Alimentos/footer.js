<<<<<<< HEAD
import React from 'react';
import { MDBContainer} from "mdbreact";
import { Link } from 'react-router-dom';

const FooterImg = () => {
    return ( 
        <div id="hola" className="footer-copyright text-center">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright  <Link to="/"> PuercoAraña.com </Link>
        </MDBContainer>
      </div>
     );
}
 
export default FooterImg;
=======
import React from "react";
import { MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";

const FooterImg = () => {
  return (
    <div id="hola" className="footer-copyright text-center">
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright{" "}
        <Link to="/"> PuercoAraña.com </Link>
      </MDBContainer>
    </div>
  );
};

export default FooterImg;
>>>>>>> 9702e523b21e5fecc2debfd609a1a143461ce8f8
