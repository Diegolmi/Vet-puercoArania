import React, { useState } from 'react';
import { MDBInput, MDBCol, MDBDatePickerV5, MDBTimePicker } from 'mdbreact';
import Button from 'react-bootstrap/Button';
import axiosInstance from '../../../util/axiosInstance';

const FormTurnos = ({ crearTurno }) => {
  const [turno, setEditarTurno] = useState({
    pet: '',
    user: '',
    date: '',
    time: '',
    description: '',
    service: ''
  })

  const [error, actualizarError] = useState(false)

  const handleChange = e => {
    setEditarTurno({

      ...turno,
      [e.target.name]: e.target.value

    })


  }

  const { pet, user, date, time, description, service } = turno;


  const handleSubmit = async (id , e) => {
    //e.preventDefault();
    const result = await axiosInstance.put(`/turnos/${id}`, turno)

    if (pet.trim() === '' || user.trim() === '' || date.trim() === '' || time.trim() === '' ||
      description.trim() === '' || service.trim() === '') {
      actualizarError(true)
      return;
    }

    turno.id = result

    actualizarError(false);
    crearTurno(turno);

    setEditarTurno({
      pet: '',
      user: '',
      date: '',
      time: '',
      description: '',
      service: ''
    })



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
        {error ? <p className="red">Todos los campos son obligatorios</p> : null}


        <Button variant="primary" onClick={handleSubmit}>
          Solicitar
          </Button>
      </form>
    </>
  );
}

export default FormTurnos;