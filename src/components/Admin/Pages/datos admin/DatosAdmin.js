import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';



import FormDatosAdmin from './FormDatosAdmin';
import MostrarDatosAdmin from './MostrarDatosAdmin';

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
                {/* <Tab eventKey="contact" title="Contact" disabled>
                </Tab> */}
            </Tabs>
            </div>
        </div>

    </div>
     );
}
 
export default DatosAdmin;