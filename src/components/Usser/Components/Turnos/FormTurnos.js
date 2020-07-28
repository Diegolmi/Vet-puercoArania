import React, { useState } from "react";
import { MDBInput, MDBCol, MDBDatePickerV5, MDBTimePicker } from "mdbreact";
import Button from "react-bootstrap/Button";
import axiosInstance from "../../../util/axiosInstance";
import Swal from "sweetalert2";
import './styleTurno.css';
import Turnos from './Turnos'
const FormTurnos = ({ listarTurnos }) => {
  const [solicitarTurno, setSolicitarTurno] = useState({
    user: "",
    pet: "",
    service: "",
    date: {},
    time: "",
    description: "",
  });

  const { pet, description, service } = solicitarTurno;

  const handleChange = e => {
    setSolicitarTurno({
      ...solicitarTurno,
      [e.target.name]: e.target.value,
    });
  };
  const handleDate = (e) => {
    setSolicitarTurno({
      ...solicitarTurno,
      date: e,
    });
  };
  const handleTime = (e) => {
    setSolicitarTurno({
      ...solicitarTurno,
      time: e,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   await axiosInstance.post('/turnos', solicitarTurno)
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Listo, ya tenes tu turno!!",
      showConfirmButton: false,
      timer: 2500
    })
    //listarTurnos()
  }

  return (
    <>
    
    <div className="formTurnos">
    <h2>Solicita tu turno</h2>  
      <form onSubmit={handleSubmit}>
        <MDBCol md="8">
          <MDBInput
            onChange={handleChange}
            name="pet"
            label="Nombre Mascota"
            value={pet}
            required
          />
        </MDBCol>
        <MDBCol md='8'>
          <MDBInput
            onChange={handleChange}
            name="user"
            label="Nombre Dueño"
            required />
        </MDBCol>
        <MDBCol md='8'>
          <MDBDatePickerV5
            getValue={handleDate}
            name="date"
            disablePast />
        </MDBCol>
        <MDBCol md='8'>
          <MDBTimePicker
            getValue={handleTime}
            name="time"
            id="timePicker"
            label="Hora"
          />
        </MDBCol>
        <MDBCol md="8">
          <MDBInput
            onChange={handleChange}
            name="description"
            type="textarea"
            label="Consulta"
            rows="5"
            value={description}
          />
        </MDBCol>
        <MDBCol md="8">
          <select
            onChange={handleChange}
            name="service"
            className="browser-default custom-select mb-4"
            value={service}
          >
            <option>Servicios</option>
            <option>Veterinaria</option>
            <option>Spa</option>
            <option>Hotel</option>
          </select>
        </MDBCol>

        <Button variant="primary" onClick={handleSubmit}>
          Solicitar
        </Button>
      </form>
    </div>
    </>
  );
};

export default FormTurnos;
