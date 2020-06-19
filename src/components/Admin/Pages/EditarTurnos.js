import React, { useState } from 'react';
import CardTurnos from '../Components/CardTurnos';
import '../Admin.css';
import BreadCrumbsServicios from '../Components/BreadCrumbsServicios';

const EditarTurnos = () => {
    const [turnos, setTurnos] = useState(false)
    return ( 
        <div className="container-turnos-admin">
            <h2 className="my-3">Turnos disponibles</h2>
            <div className="container-links-turnos my-5">
                <h2 className="links-turnos-titulo">Turnos</h2>
                <div className="slash">/</div>
                <button className="links-turnos">Medico</button>
                <div className="slash">/</div>
                <button className="links-turnos">Servicios</button>
            </div>
            <div className="row">
                <div className="col-12">
                    
                    <CardTurnos />
                </div>
            </div>


        </div>
     );
}
 
export default EditarTurnos;