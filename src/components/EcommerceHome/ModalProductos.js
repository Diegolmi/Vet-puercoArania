import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalProductos = ({show, setShow, producto }) => {

    
    const handleClose = () => setShow(false);
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>informacion producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>{producto.details}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        
    )
}
export default ModalProductos;
