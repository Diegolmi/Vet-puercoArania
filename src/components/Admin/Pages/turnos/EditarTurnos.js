import React, { useState, useEffect } from 'react';
import CardTurnos from '../../Components/CardTurnos';
import '../../Admin.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import axiosInstance from '../../../util/axiosInstance';

const EditarTurnos = () => {

    const [turnos, setTurnos] = useState([])

    const listarTurnos = async () => {
        const res = await axiosInstance.get("/turnos")
        setTurnos(res.data)
    }
    
    useEffect(() => {
        listarTurnos()
    }, [setTurnos])
    
   
    return ( 
        <div className="container-turnos-admin my-3">
            
            <div className="row">
                <div className="col-12">
                <Tabs defaultActiveKey="turnos" transition={false} id="noanim-tab-example">
                        <Tab className="tabs-turnos" eventKey="turnos" title="Todos los Turnos">
                            <h2 className="my-2">Turnos Disponibles</h2>
                            <CardTurnos turnos={turnos} listarTurnos={listarTurnos} />
                        </Tab>
                        <Tab className="tabs-turnos" eventKey="medicos" title="Medicos">
                        <h2 className="my-2">Turnos Para Medicos Disponibles</h2>
                            <CardTurnos />
                        </Tab>
                        <Tab className="tabs-turnos" eventKey="servicios" title="Servicios">
                        <h2 className="my-2">Turnos Para Servicios Disponibles</h2>
                            <CardTurnos />
                        </Tab>
                    </Tabs>
                    
                </div>
            </div>


        </div>
     );
}
 
export default EditarTurnos;