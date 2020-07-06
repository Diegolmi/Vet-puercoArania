import React from "react";
import "./carrito.css";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Form from "react-bootstrap/Form";
import freeShipping from "../../assets/img/free-shipping-468395.png";
// import chargeShipping from '../../assets/img/chargeShipping.png'

const Envios = () => {
  return (
    <div className="">
      {/* <div className="free-shipping">

            </div>

            <div className="charge-shipping">

            </div> */}

      <MDBContainer className="mt-5 text-center shipping-cards">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron className="jumbotron-shipping-free">
              <div className="shipping-price">
                <Form.Check type="checkbox" />
                <h2>Envio Gratis</h2>
              </div>
              <p>llega en 3 hábiles</p>
              <img src={freeShipping} alt="" className="free-shipping-img" />
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <MDBJumbotron className="jumbotron-shipping-charge">
              <div className="shipping-price">
                <Form.Check type="checkbox" />
                <h2>Envio con cargo</h2>
              </div>
              <p>llega en 24hs hábiles</p>
              <p className="prices-shipping">$200</p>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Envios;
