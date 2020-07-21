import React, { useState } from "react";
import { MDBInput, MDBCol, MDBDatePickerV5, MDBTimePicker } from "mdbreact";
import Button from "react-bootstrap/Button";
import axiosInstance from "../../util/axiosInstance";

const FormTurnos = ({ handleClose }) => {
  const [editarTurno, setEditarTurno] = useState({
    pet: "",
    user: "",
    date: "",
    time: "",
    description: "",
    service: "",
  });

  const handleChange = (e) => {
    setEditarTurno({
      ...editarTurno,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (id) => async (e) => {
    e.preventDefault();
   await axiosInstance.put(`/turnos/${id}`, editarTurno);
  };

  return (
    <form onSubmit={handleSubmit}>
      <MDBCol md="12">
        <MDBInput
          onChange={handleChange}
          name="pet"
          label="Nombre Mascota"
          required
        />
      </MDBCol>
      <MDBCol md="12">
        <MDBInput
          onChange={handleChange}
          name="user"
          label="Nombre Dueño"
          required
        />
      </MDBCol>
      <MDBCol md="12">
        <MDBDatePickerV5 onChange={handleChange} name="date" disablePast />
      </MDBCol>
      <MDBCol md="12">
        <MDBTimePicker
          onChange={handleChange}
          name="time"
          id="timePicker"
          label="12hrs format"
        />
      </MDBCol>
      <MDBCol md="12">
        <MDBInput
          onChange={handleChange}
          name="description"
          type="textarea"
          label="Consulta"
          rows="5"
        />
      </MDBCol>
      <MDBCol md="12">
        <select
          onChange={handleChange}
          name="service"
          className="browser-default custom-select mb-4"
        >
          <option>Servicios</option>
          <option value="1">....</option>
          <option value="2">....</option>
          <option value="3">.....</option>
        </select>
      </MDBCol>

      <Button variant="primary" onClick={handleClose}>
        Modificar
      </Button>
    </form>
  );
};

export default FormTurnos;
