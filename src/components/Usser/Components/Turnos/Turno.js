import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import axiosInstance from '../../../util/axiosInstance';
//import swal from '@sweetalert/with-react';

import './styleTurno.css';

const Turno = ({ turno, listarTurnos }) => {

    const eliminarTurno = async (id) => {

        const result = await axiosInstance.delete(`/turnos/${id}`);
        console.log(result);
        listarTurnos();

    }

    return (
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }} className="cardTurno">
                        <p>Mascota: <span>{turno.pet}</span></p>
                        <p>Dueño: <span>{turno.user}</span></p>
                        <p>Fecha: <span>{turno.date}</span></p>
                        <p>Hora: <span>{turno.time}</span></p>
                        <p>Descripcion: <span>{turno.description}</span></p>
                        <p>Sector: <span>{turno.service}</span></p>

                        <Button className="btn btn-danger"
                            onClick={() => eliminarTurno(turno._id)} >Cancelar Turno</Button>
                    </Card >
                </Col>
            </Row>
        </Container>


    )
};
export default Turno;

