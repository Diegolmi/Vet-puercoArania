import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Turno from "./Turno";
import axiosInstance from "../../../util/axiosInstance";

import "./styleTurno.css";

const Turnos = () => {
  const [turnos, setTurnos] = useState([]);

  const listarTurnos = async () => {
    const result = await axiosInstance.get("/turnos/user");

    setTurnos(result.data || []);
    console.log(result.data);

  };

  useEffect(() => {
    listarTurnos();
  }, []);

  const titulo =
    turnos.length === 0 ? (
      <button
        className="btn btn-primary"
        onClick={() => {
          alert("Solicita tu turno");
        }}
      >
        Saca tu turno
      </button>
    ) : (
        ""
      );

  return (
    <Container>
      <Row>
        <Col md="12">
          <p className="tituloTurno">
            <span>{titulo}</span>
          </p>
          
            {turnos.map((turno) => (
              <Turno listarTurnos={listarTurnos} turno={turno} />
            ))}
          
        </Col>
      </Row>

    </Container>



  );
};

export default Turnos;
