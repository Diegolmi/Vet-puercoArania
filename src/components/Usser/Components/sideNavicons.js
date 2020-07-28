import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import {  MdDashboard } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';

import './styleMascotas.css';

const SidebarIcons = () => {
    return ( 
        <div className="sidebaricons-container">
            <div className="datos-sidebar-icons">
            </div>
            <ul className="secciones-sidebar">
                <li className="listado-sidebar"> <Link to="/usuario"  className="link-sidebar"><MdDashboard className="icon-sidebar-admin"/></Link></li>
                <li className="listado-sidebar"> <Link to="/usuario/turnos"  className="link-sidebar"><FaUser className="icon-sidebar-admin"/></Link></li>
                <li className="listado-sidebar"><Link to="/usuario/datos" className="link-sidebar"><RiAdminLine className="icon-sidebar-admin"/></Link></li>

            </ul>

        </div>
     );
}
 
export default SidebarIcons;
