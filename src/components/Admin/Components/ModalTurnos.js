import React from 'react';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormTurnos from './FormTurnos';


const ModalTurnos = ({ setShow, show }) => {
    

  const handleClose = () => setShow(false);
  
    return (
        <>
      {/* <Button variant="primary" >
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar Turnos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormTurnos handleClose={handleClose}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
    );
}

export default ModalTurnos;