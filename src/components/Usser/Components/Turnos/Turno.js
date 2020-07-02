import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axiosInstance from '../../../util/axiosInstance';

 const Turno = ({turno, listarTurnos}) => {

    const eliminarTurno = async (id) => {
        
        const result = await axiosInstance.delete(`/turnos/${id}`);
        console.log(result);
        listarTurnos();
 
    }

    return(
    <Card style={{ width: '18rem' }}>
        <div className="cardTurno">
            <p>Mascota: <span>{turno.pet}</span></p>
            <p>Dueño: <span>{turno.user}</span></p>
            <p>Fecha: <span>{turno.date}</span></p>
            <p>Hora: <span>{turno.time}</span></p>
            <p>Descripcion: <span>{turno.description}</span></p>
            <p>Sector: <span>{turno.service}</span></p>

            <Button className="btn btn-danger"
            onClick={ () => eliminarTurno(turno._id)} >Cancelar Turno</Button>
        </div>
    </Card > 

            
    )};
    export default Turno;

