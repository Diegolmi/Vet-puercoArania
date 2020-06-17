import React from 'react';
import { MDBBtn, MDBInput, MDBRow, MDBCol } from 'mdbreact';
import './styleMascotas.css';

const EditMascotas = ({ setShowEdit, onSubmitForm }) => {

    const modificarMascota = () => {
        setShowEdit(false)
    }
    return ( 
        <div className='editMascotas'>
          <h1 >Editar Mascota</h1>
        <form
          className='needs-validation'
          noValidate
          onSubmit={onSubmitForm}
        >
          <MDBRow>
            <MDBCol md='4'>
            <MDBInput label="Nombre" required/>   
            </MDBCol>
            
            <MDBCol md='4'>
             <MDBInput label="Raza" required/>
            </MDBCol>

            <MDBCol md='4'>
              <MDBInput label="Control" required/>   
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md='4'>
                <MDBInput  label="Años" required/>
            </MDBCol>

          </MDBRow>
         
          <MDBBtn gradient="blue" onClick={modificarMascota}>Modificar</MDBBtn>
        </form>
      </div>
     );
}
 
export default EditMascotas;