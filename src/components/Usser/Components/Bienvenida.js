import React from 'react';
import { MDBContainer, MDBAlert } from 'mdbreact';

const BienvenidaAlert = () => {
  return (
    <MDBContainer className="container-saludo">
      <MDBAlert color="primary" >
        Diego Olmi
      </MDBAlert>
    </MDBContainer>
  )
}

export default BienvenidaAlert;