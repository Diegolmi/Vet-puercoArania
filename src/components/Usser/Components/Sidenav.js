import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import logo from '../../../assets/img/logo.png';
import './styleMascotas.css';
import { Col } from 'react-bootstrap';
import { RiAdminLine } from 'react-icons/ri';



const SidebarAdmin = () => {
    return ( 
        
        <Col md={3}>
        <div className="sidebar-container">
            
            <div className="datos-sidebar">
                
            <Link to="/"><img src={logo} alt="Logo veterinaria" className="logo" /></Link>
            </div>
            <ul className="secciones-sidebar">
                <li className="listado-sidebar"><MdDashboard className="icon-sidebar-admin"/> <Link to="/usuario"  className="link-sidebar">Inicio</Link></li>
                <li className="listado-sidebar"><FaUser className="icon-sidebar-admin"/> <Link to="/usuario/mascotas"  className="link-sidebar">Mascotas</Link></li>
                <li className="listado-sidebar"><RiAdminLine className="icon-sidebar-admin"/><Link to="/usuario/datos" className="link-sidebar">Usuarios</Link></li>

            </ul>
            
        </div>
        </Col>
     );
}
 
export default SidebarAdmin;
