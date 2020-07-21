import React from 'react';
import {Modal} from 'react-bootstrap';
import EditProductForm from './EditProductForm';


const ModalProduct = ({ setShow, show, productById, handleSubmit, handleChange }) => {

    const handleClose = () => setShow(false);
    return ( 
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body><EditProductForm productById={productById} handleSubmit={handleSubmit} handleChange={handleChange} /></Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
     );
}
 
export default ModalProduct;