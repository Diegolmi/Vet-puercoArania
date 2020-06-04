import React, {useState} from 'react';
import '../../Admin.css';

import ListaConsultas from '../../Components/ListaConsultas';
import FormConsultas from '../../Components/FormConsultas';


const AdminConsultas = () => {
    const [verConsulta, setVerConsulta] = useState(false);

    const consulta = () => {
        setVerConsulta(true)
    }

    const cerrarConsulta = () => {
        setVerConsulta(false)
    }



    return ( 
        <div className="container-consultas-admin mx-2">
            <h2 className="my-3">Consultas</h2>
            <div className="row">
                <div className="col-4">
                    <ListaConsultas consulta={consulta} />
                </div>
                {verConsulta ?  <div className="col-8">
                    <FormConsultas cerrarConsulta={cerrarConsulta} />
                </div> : null}
               
            </div>
        </div>
     );
}
 
export default AdminConsultas;