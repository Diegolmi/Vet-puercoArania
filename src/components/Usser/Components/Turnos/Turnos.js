import React, { useState } from 'react';
import { Tabs, Tab, Card, ListGroup, Button } from 'react-bootstrap';
import FormTurnos from './FormTurnos';
import Turno from './Turno'


const Turnos = () => {

    const [turnos, guardarTurnos] = useState([]);

    const crearTurno = turno => {
        guardarTurnos([
            ...turnos,
            turno
        ]);
    }
    const eliminarTurno = id => {

        const nuevosTurnos = turnos.filter(turno => turno.id !== id);
        guardarTurnos(nuevosTurnos);

    }

    const titulo = turnos.length === 0 ? 'Todavia no sacaste turno' : "Administra los turnos";

    return (
        <div>
            <Tabs defaultActiveKey="datos" id="uncontrolled-tab-example">
                <Tab eventKey="datos" title="Administrador de turnos">
                    <Card style={{ width: '18rem' }}>
                        <p><span>{titulo}</span></p>
                        {turnos.map(turno => (
                            <Turno
                                key={turno.id}
                                turno={turno}
                                eliminarTurno={eliminarTurno}
                            />
                        ))}
                    </Card>

                </Tab>
                <Tab eventKey="modificar" title="Solicitar Turno">
                    <FormTurnos
                        crearTurno={crearTurno} />
                </Tab>

            </Tabs>
        </div>
    )
}

export default Turnos;









