import React from 'react';
import '../Admin.css';

import ListaConsultas from '../Components/ListaConsultas';

const AdminConsultas = () => {
    
    return ( 
        <div className="container-consultas-admin">
            <h2 className="my-3">Consultas</h2>
            <div className="row">
                
                <div className="col-12">
                    <ListaConsultas />
            
                </div>
            </div>
        </div>
     );
}
 
export default AdminConsultas;