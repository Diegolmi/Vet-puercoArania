import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

const FormPage = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">Sign up</p>
        <div className="grey-text">
          <MDBInput label="Nombre del dueño" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Nombre de la mascota" icon="id-card" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Raza y tipo de mascota" icon="paw" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Edad de la mascota" icon="birthday-cake" group type="number" validate
            error="wrong" success="right" />
          <MDBInput label="Servicio que solicita" hint="Peluqueria, Guarderia, Consulta, Internacion, Cirugia, Guardia" icon="concierge-bell" group type="text" validate rror="wrong"
            success="right"/>
        </div>
        <div className="text-center">
          <MDBBtn color="primary">Register</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default FormPage;