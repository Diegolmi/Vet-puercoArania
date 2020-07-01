import React from 'react';
import Button from 'react-bootstrap/Button';

 const Turno = ({turno, eliminarTurno}) => (
        <div className="cardTurno">
            <p>Mascota: <span>{turno.pet}</span></p>
            <p>Dueño: <span>{turno.user}</span></p>
            <p>Fecha: <span>{turno.date}</span></p>
            <p>Hora: <span>{turno.time}</span></p>
            <p>Descripcion: <span>{turno.description}</span></p>
            <p>Sector: <span>{turno.service}</span></p>
            pet, user, date, time, description, service

            <Button className="btn btn-danger"
            onClick={ () => eliminarTurno(turno.id)} >Cancelar Turno</Button>

            
        </div>
    );

    export default Turno;

