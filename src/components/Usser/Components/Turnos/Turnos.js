import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Card, ListGroup, Button } from 'react-bootstrap';
import FormTurnos from './FormTurnos';
import Turno from './Turno';
import axiosInstance from '../../../util/axiosInstance';



const Turnos = () => {

    const [turnos, setTurnos] = useState([]);

    const listarTurnos = async () => {
        const result = await axiosInstance.get('/turnos/user');
        console.log(result);
        setTurnos(result.data);
    }
    console.log(turnos);

    useEffect(() => {

        listarTurnos()
    }, [])



    const titulo = turnos.length === 0 ? 'Todavia no sacaste turno' : "Administra los turnos";

    return (
        <div>
            <Tabs defaultActiveKey="datos" id="uncontrolled-tab-example">
                <Tab eventKey="datos" title="Administrador de turnos">
                    <p><span>{titulo}</span></p>
                    {turnos.map(turno => (


                        <Turno
                            listarTurnos={listarTurnos}
                            key={turno.id}
                            turno={turno}
                        />

                    ))}

                </Tab>
                <Tab eventKey="modificar" title="Solicitar Turno">
                    <FormTurnos
                        listarTurnos={listarTurnos}
                    />
                </Tab>

            </Tabs>
        </div>
    )
}

export default Turnos;









