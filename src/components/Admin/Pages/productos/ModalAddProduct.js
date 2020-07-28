import React from 'react';
import {Modal} from 'react-bootstrap';
import FormProducto from "../../Components/FormProducto";

const ModalAddProduct = ({listaProductos, show, setShow}) => {
    const handleClose = () => setShow(false);
    return ( 
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body> <FormProducto listaProductos={listaProductos} /></Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
     );
}
 
export default ModalAddProduct;