import React from 'react';
import {Modal} from 'react-bootstrap';
import FormUser from '../../Components/FormUser';



const ModalAdd = ({setShow, show, listarUsuarios, userById}) => {

    const handleClose = () => setShow(false);

    return ( 
        <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body><FormUser userById={userById} listarUsuarios={listarUsuarios} handleClose={handleClose} /></Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
        </>
     );
}
 
export default ModalAdd;
