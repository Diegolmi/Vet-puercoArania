import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import axiosInstance from "../util/axiosInstance";
import '../SecServicios/secsvs.css'



const FormPage = () => {

    const [solicitarTurno, setSolicitarTurno] = useState({
      user: '',
      pet: '',
      service: '',
      date: '',
      time: '',
      description: ''
    })

const handleChange = e => {
  setSolicitarTurno({
    ...solicitarTurno,
      [e.target.name]: e.target.value
  })
}

const handleSubmit = async e =>{
  e.preventDefault();
  const result = await axiosInstance.post('/turnos', solicitarTurno)
  setSolicitarTurno(result)
  console.log(result)
}

return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="12">
      <form onSubmit={handleSubmit}>
        {/* <p className="h5 text-center mb-4">Solicitud de Turnos</p> */}
        <div className="grey-text">
          <MDBInput onChange={handleChange} name="user" label="Nombre del dueño" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput onChange={handleChange} name="pet" label="Nombre de la mascota" icon="id-card" group type="text" validate error="wrong"
            success="right" />
          <MDBInput onChange={handleChange} name="service" label="Servicio que solicita" hint="Peluqueria, Guarderia, Consulta, Internacion, Cirugia, Guardia" icon="concierge-bell" group type="text" validate rror="wrong"
            success="right"/>
            <MDBInput onChange={handleChange} name="date" label="fecha" icon="calendar-alt" group type="date" validate error="wrong"
            success="right" />
            <MDBInput onChange={handleChange} name="time"  icon="clock" group type="time" validate error="wrong"
            success="right" />
            <MDBInput onChange={handleChange} name="description" label="consulta" type="textarea" icon="comment-alt" validate error="wrong"
            success="right" />
        </div>
        <div className="text-center">
        <MDBBtn id="btn_turno_modal" type="submit" outline color="secondary my-4"> Enviar </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default FormPage;