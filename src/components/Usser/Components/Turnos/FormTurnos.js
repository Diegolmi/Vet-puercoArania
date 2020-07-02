import React, { useState } from 'react';
import { MDBInput, MDBCol, MDBDatePickerV5, MDBTimePicker } from 'mdbreact';
import Button from 'react-bootstrap/Button';
import axiosInstance from '../../../util/axiosInstance';

const FormTurnos = () => {

  const [solicitarTurno, setSolicitarTurno] = useState({
    user: '',
    pet: '',
    service: '',
    date: '',
    time: '',
    description: ''
  })

  const { pet, user, date, time, description, service } = solicitarTurno;

  const handleChange = e => {
    setSolicitarTurno({
      ...solicitarTurno,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await axiosInstance.post('/private/turnos', solicitarTurno)
    setSolicitarTurno(result)
    console.log(result)
  }








  return (

    <>


      <form onSubmit={handleSubmit}>
        <MDBCol md='8'>
          <MDBInput onChange={handleChange}
            name="pet"
            label="Nombre Mascota"
            value={pet}
            required />
        </MDBCol>
        <MDBCol md='8'>
          <MDBInput
            onChange={handleChange}
            name="user"
            label="Nombre Dueño"
            value={user}
            required />
        </MDBCol>
        <MDBCol md='8'>
          <MDBDatePickerV5
            onChange={handleChange}
            name="date"
            value={date}
            disablePast />
        </MDBCol>
        <MDBCol md='8'>
          <MDBTimePicker
            onChange={handleChange}
            name="time"
            id="timePicker"
            label="Hora"
            value={time} />
        </MDBCol>
        <MDBCol md='8'>
          <MDBInput
            onChange={handleChange}
            name="description"
            type="textarea"
            label="Consulta"
            rows="5"
            value={description} />
        </MDBCol>
        <MDBCol md='8'>
          <select
            onChange={handleChange}
            name="service"
            className="browser-default custom-select mb-4"
            value={service}>
            <option>Servicios</option>
            <option value="1">Veterinaria</option>
            <option value="2">Spa</option>
            <option value="3">Hotel</option>
          </select>
        </MDBCol>

        <Button variant="primary" onClick={handleSubmit}>
          Solicitar
          </Button>
      </form>
    </>
  );
}

export default FormTurnos;