import React, { useState } from "react";
import "../Admin.css";
import ModalTurnos from "../Components/ModalTurnos";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const CardTurnos = ({ turnos, eliminarTurno }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div className="card-turnos">
      {turnos
        ? turnos.map((turno) => (
            <Card
              className="m-4"
              border="primary"
              key={turno._id}
              style={{ width: "18rem" }}
            >
              <Card.Header className="header_card">
                
                <Card.Title>Mascota: {turno.pet} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Dueño: {turno.user}
                </Card.Subtitle>
              </Card.Header>
              <Card.Body className="cardBody">
                <p>Fecha: {turno.date} </p>
                <p>Hora: {turno.time}</p>
                <p>Descripcion: {turno.description}</p>
                <p>Servicio: {turno.service}</p>
              </Card.Body>
              <Card.Footer>
                <Button
                  className="btn-borrar"
                  onClick={eliminarTurno(turno._id)}
                  variant="outline-danger"
                >
                  Borrar
                </Button>
              </Card.Footer>
            </Card>
          ))
        : null}
      <ModalTurnos setShow={setShow} show={show} />
    </div>
  );
};

export default CardTurnos;
