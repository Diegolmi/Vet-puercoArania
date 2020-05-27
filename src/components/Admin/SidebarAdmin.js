import React from 'react';
import { Link } from 'react-router-dom';

const SidebarAdmin = () => {
    return ( 
        <div className="sidebar-container">
            <div className="datos-sidebar">
                
                <h4>Bienvenido Martin</h4>
            </div>
            <ul className="secciones-sidebar">
                <li className="listado-sidebar"><Link className="link-sidebar">texto prueba</Link></li>
                <li className="listado-sidebar"><Link className="link-sidebar">texto prueba</Link></li>
                <li className="listado-sidebar"><Link className="link-sidebar">texto prueba</Link></li>
                <li className="listado-sidebar"><Link className="link-sidebar">texto prueba</Link></li>
                <li className="listado-sidebar"><Link className="link-sidebar">texto prueba</Link></li>
                <li className="listado-sidebar"><Link className="link-sidebar">texto prueba</Link></li>
                <li className="listado-sidebar"><Link className="link-sidebar">texto prueba</Link></li>
                <li className="listado-sidebar"><Link className="link-sidebar">texto prueba</Link></li>
            </ul>
        </div>
     );
}
 
export default SidebarAdmin;