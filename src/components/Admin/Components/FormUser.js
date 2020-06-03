import React from 'react';
import { MDBBtn, MDBInput, MDBRow, MDBCol } from 'mdbreact';


const FormUser = ({ setShowEdit, onSubmitForm }) => {

    const modificarUsuario = () => {
        setShowEdit(false)
    }
    return ( 
        <div>
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
             <MDBInput label="Apellido" required/>
            </MDBCol>

            <MDBCol md='4'>
              <MDBInput label="Direccion" required/>   
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md='4'>
                <MDBInput type="email" label="Email" required/>
            </MDBCol>

            <MDBCol md='4'>
              <MDBInput label="Material input" required/> 
            </MDBCol>

            <MDBCol md='4'>
              <MDBInput label="Material input" required/>
            </MDBCol>
          </MDBRow>
         
          <MDBBtn gradient="blue" onClick={modificarUsuario}>Modificar</MDBBtn>
        </form>
      </div>
     );
}
 
export default FormUser;