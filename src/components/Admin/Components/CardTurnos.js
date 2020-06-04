import React, { useState } from 'react';

import '../Admin.css';
import ModalTurnos from '../Components/ModalTurnos';

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const CardTurnos = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div className="card-turnos">
            {array.map(arr => (
                
                <Card className="m-2" border="primary" style={{ width: "18rem" }}>
                <Card.Header className="header_card">
                    <Col xs={6} md={4}>
                        <Image src="imagen" roundedCircle />
                    </Col>
                        <Card.Title>Mascota: </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Dueño: </Card.Subtitle>
                </Card.Header>
                <Card.Body className="cardBody">
                    
                        <p>Fecha:  </p>
                        <p>Hora: </p>
                        <p>Sintomas: </p>
                    
                </Card.Body>
                <Card.Footer>
                <Button
                    className="btn-borrar"
                    onClick={handleShow}
                    variant="outline-primary">Modificar</Button>
                    <Button
                    className="btn-borrar"
                    // onClick={()=>eliminarCita(cita.id)} 
                    variant="outline-danger">Borrar</Button>
                </Card.Footer>
            </Card>
                
            ))}
            <ModalTurnos setShow={setShow} show={show} />
        </div>
    );
}

export default CardTurnos;