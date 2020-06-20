import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import {  MDBInput, MDBRow, MDBCol } from 'mdbreact';
import './styleMascotas.css';

const ModalEdit = ({show, setShow}) => {
  
  const handleClose = () => setShow(false);
  return (
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h1 >Editar Mascota</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='editMascotas'>
          
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    
  );
}

export default ModalEdit