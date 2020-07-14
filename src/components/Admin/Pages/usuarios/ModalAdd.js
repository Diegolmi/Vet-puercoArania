import React, { useState, useEffect } from 'react';
import {Modal, Button} from 'react-bootstrap';
import FormUser from '../../Components/FormUser';
import axiosInstance from '../../../util/axiosInstance';



const ModalAdd = ({setShow, show, listarUsuarios, userById}) => {
//     const [usuario, setUsuario] = useState([]);

//   const traerUsuarios = async () => {
//     const response = await axiosInstance.get("/private/userlogged");
//     setUsuario(response.data);
//   };

//   useEffect(() => {
//     traerUsuarios();
//   }, []);

    const handleClose = () => setShow(false);

    return ( 
        <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body><FormUser userById={userById} listarUsuarios={listarUsuarios} /></Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
        </>
     );
}
 
export default ModalAdd;
