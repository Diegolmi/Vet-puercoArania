import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import SelectS from './selectSv'

const FormPage = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="12" s="12">
      <form>
        <p className="h5 text-center mb-4">Solicitud de turno </p>
        <div className="grey-text">
          <MDBInput label="Nombre del dueño" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Nombre de tu mascota" icon="id-card" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Raza y tipo de mascota" icon="paw" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Edad de la mascota" icon="birthday-cake" group type="number" validate
            error="wrong" success="right" />
            <SelectS/>
         </div>
        <div className="text-center">
          <MDBBtn color="primary">Enviar</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default FormPage;