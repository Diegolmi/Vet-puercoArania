import React, { useState } from 'react';
import { MDBInput, MDBCol, MDBDatePickerV5, MDBTimePicker } from 'mdbreact';
import Button from 'react-bootstrap/Button';
import axiosInstance from '../../../util/axiosInstance';
import Swal from 'sweetalert2';

const FormTurnos = ({listarTurnos}) => {

  const [solicitarTurno, setSolicitarTurno] = useState({
    user: '',
    pet: '',
    service: '',
    date: {},
    time: '12:00',
    description: ''
  })

  const { pet, user, date, time, description, service } = solicitarTurno;

  const handleChange = e => {
    console.log(e);
    setSolicitarTurno({

      ...solicitarTurno,
      [e.target.name]: e.target.value

    })
  }
  const handleDate = e => {
    setSolicitarTurno({
      ...solicitarTurno,
      date: e
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await axiosInstance.post('/turnos', solicitarTurno)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Listo, ya tenes tu turno!!',
      showConfirmButton: false,
      timer: 2500
    })
    console.log(result)
    listarTurnos()
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
            getValue={handleDate}
            name="date"

            disablePast />
        </MDBCol>
        <MDBCol md='8'>
          <MDBTimePicker
            getValue={handleDate}
            name="time"
            id="timePicker"
            label="Hora"
          />
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
            <option >Veterinaria</option>
            <option >Spa</option>
            <option >Hotel</option>
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