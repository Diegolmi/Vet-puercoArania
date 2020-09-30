import React from "react";
import "./secsvs.css";
import Modal from "react-bootstrap/Modal";
import { MDBBtn } from "mdbreact";
import FormTurnos from "../FormServicios";

const ModalTurnos = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Solicitud de Turnos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormTurnos />
        </Modal.Body>
        <Modal.Footer>
          <MDBBtn
            id="btn_turno_modal"
            onClick={handleClose}
            outline
            color="secondary my-4"
          >
            {" "}
            Cerrar
          </MDBBtn>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalTurnos;
