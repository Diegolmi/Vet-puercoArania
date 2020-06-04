import React from 'react';
import { MDBContainer, MDBAlert } from 'mdbreact';
import '../Admin.css'

const SaludoAlert = () => {
  return (
    <MDBContainer className="container-saludo">
      <MDBAlert color="primary" >
        Bienvenido Martin Jerez
      </MDBAlert>
    </MDBContainer>
  )
}

export default SaludoAlert;