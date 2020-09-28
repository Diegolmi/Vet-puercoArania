import React from "react";
import Mascotas from './Components/Mascotas';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FormTurnos from './Components/Turnos/FormTurnos';

const IndexUsser = () => {
    return (

        <Container>
            <Row>
                <Col><FormTurnos /></Col>
                <Col><Mascotas /></Col>
            </Row>

        </Container >

    )
}

export default IndexUsser;
