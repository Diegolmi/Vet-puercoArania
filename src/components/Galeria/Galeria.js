import React, { Component } from "react";

import {
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";
import './styleGaleria.css';
import Navbar from '../Navbar/Nav';
import Galeria1 from "../../assets/img/Galeria1.png";
import g2 from "../../assets/img/g2.png";
import g3 from "../../assets/img/g3.png";
import g4 from "../../assets/img/g4.png";
import h1 from "../../assets/img/h1.png";
import h2 from "../../assets/img/h2.png";

class CarouselPage extends Component {
  
  render() {
    return (
        <>
        <Navbar />
        <MDBContainer className="fondoGaleria">
          <div>
            <MDBRow>
              <MDBCol md="12" className="imGaleria">
                <img src={Galeria1} className=" img-fluid z-depth-1" alt="" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol lg="4" md="12" className="imGaleria">
                <img src={g2} className=" img-fluid z-depth-1" alt="" />
              </MDBCol>
              <MDBCol lg="4" md="6" className="imGaleria">
                <img src={g3} className=" img-fluid z-depth-1" alt="" />
              </MDBCol>
              <MDBCol lg="4" md="6" className="imGaleria">
                <img src={g4} className=" img-fluid z-depth-1" alt="" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="6" className="mb-3">
                <img src={h1} className="img-fluid z-depth-1" alt="" />
              </MDBCol>
              <MDBCol md="6" className="mb-3">
                <img src={h2} className="img-fluid z-depth-1" alt="" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol lg="4" md="12" className="mb-3">
                <img
                  src="https://mdbootstrap.com/img/Others/documentation/img(115)-mini.jpg"
                  className="img-fluid z-depth-1"
                  alt=""
                />
              </MDBCol>
              <MDBCol lg="4" md="6" className="mb-3">
                <img
                  src="https://mdbootstrap.com/img/Others/documentation/img(116)-mini.jpg"
                  className="img-fluid z-depth-1"
                  alt=""
                />
              </MDBCol>
              <MDBCol lg="4" md="6" className="mb-3">
                <img
                  src="https://mdbootstrap.com/img/Others/documentation/img(117)-mini.jpg"
                  className="img-fluid z-depth-1"
                  alt=""
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="6" className="mb-3">
                <img
                  src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg"
                  className="img-fluid z-depth-1"
                  alt=""
                />
              </MDBCol>
              <MDBCol md="6" className="mb-3">
                <img
                  src="https://mdbootstrap.com/img/Others/documentation/img(129)-mini.jpg"
                  className="img-fluid z-depth-1"
                  alt=""
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol lg="4" md="12" className="mb-3">
                <img
                  src="https://mdbootstrap.com/img/Others/documentation/img(115)-mini.jpg"
                  className="img-fluid z-depth-1"
                  alt=""
                />
              </MDBCol>
              <MDBCol lg="4" md="6" className="mb-3">
                <img
                  src="https://mdbootstrap.com/img/Others/documentation/img(116)-mini.jpg"
                  className="img-fluid z-depth-1"
                  alt=""
                />
              </MDBCol>
              <MDBCol lg="4" md="6" className="mb-3">
                <img
                  src="https://mdbootstrap.com/img/Others/documentation/img(117)-mini.jpg"
                  className="img-fluid z-depth-1"
                  alt=""
                />
              </MDBCol>
            </MDBRow>
          </div>
        </MDBContainer>
      </>
    );
  }
}
export default CarouselPage
