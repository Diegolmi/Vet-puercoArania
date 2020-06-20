import React, {useState} from 'react';
import { MDBBtn, MDBInput, MDBRow, MDBCol } from 'mdbreact';
import './styleMascotas.css';
const EditMascotas = () => {

  const [showEdit , setShowEdit] = useState(false)

    const modificarMascota = () => {
        setShowEdit(true)
    }
    return ( 
        <div className='editMascotas'>
          <h1 >Editar Mascota</h1>
        <form
          className='needs-validation'
          noValidate
          //onSubmit={onSubmitForm}
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
         
          
        </form>
      </div>
     );
}
 
export default EditMascotas;