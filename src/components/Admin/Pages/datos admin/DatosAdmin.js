import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import '../../Admin.css';



import FormDatosAdmin from './FormDatosAdmin';
import MostrarDatosAdmin from './MostrarDatosAdmin';
import FormCreateAdmin from './FormCreateAdmin';


const DatosAdmin = () => {
    return ( 
        <div className="container-datos-admin">
        <div className="row">
            <div className="col-8 my-3">
            <Tabs defaultActiveKey="datos" id="uncontrolled-tab-example">
                <Tab eventKey="datos" title="Datos Admin">
                    <MostrarDatosAdmin />
                </Tab>
                <Tab eventKey="modificar" title="Modificar Datos">
                    <h2>Cambiar Datos de cuenta</h2>
                    <FormDatosAdmin />
                </Tab>
                <Tab eventKey="crear" title="Crear Cuenta Admin">
                    <FormCreateAdmin />
                </Tab>
            </Tabs>
            </div>
        </div>

    </div>
     );
}
 
export default DatosAdmin;