import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";
import './styleGaleria.css';
import Navbar from '../Navbar/Nav';

class CarouselPage extends Component {
  render() {
    return (
        <>
        <Navbar />
      <MDBContainer className="fondoGaleria">
          <div >
        <MDBRow>
          <MDBCol md="12" className="imGaleria">
          <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg" className=" img-fluid z-depth-1" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="imGaleria">
          <img src="https://mdbootstrap.com/img/Others/documentation/img(115)-mini.jpg" className=" img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="imGaleria">
            <img src="https://mdbootstrap.com/img/Others/documentation/img(116)-mini.jpg" className=" img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="imGaleria">
            <img src="https://mdbootstrap.com/img/Others/documentation/img(117)-mini.jpg" className=" img-fluid z-depth-1" alt="" />
          </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="6" className="mb-3">
          <img src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg" className="img-fluid z-depth-1" alt="" />
        </MDBCol>
        <MDBCol md="6" className="mb-3">
          <img src="https://mdbootstrap.com/img/Others/documentation/img(129)-mini.jpg" className="img-fluid z-depth-1" alt="" / >
        </MDBCol>
      </MDBRow>
      <MDBRow>
          <MDBCol lg="4" md="12" className="mb-3">
          <img src="https://mdbootstrap.com/img/Others/documentation/img(115)-mini.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3">
            <img src="https://mdbootstrap.com/img/Others/documentation/img(116)-mini.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3">
            <img src="https://mdbootstrap.com/img/Others/documentation/img(117)-mini.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="6" className="mb-3">
          <img src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg" className="img-fluid z-depth-1" alt="" />
        </MDBCol>
        <MDBCol md="6" className="mb-3">
          <img src="https://mdbootstrap.com/img/Others/documentation/img(129)-mini.jpg" className="img-fluid z-depth-1" alt="" / >
        </MDBCol>
      </MDBRow>
      <MDBRow>
          <MDBCol lg="4" md="12" className="mb-3">
          <img src="https://mdbootstrap.com/img/Others/documentation/img(115)-mini.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3">
            <img src="https://mdbootstrap.com/img/Others/documentation/img(116)-mini.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3">
            <img src="https://mdbootstrap.com/img/Others/documentation/img(117)-mini.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
      </MDBRow>
      </div>
    </MDBContainer>
    </>
    );
  }
}

export default CarouselPage;