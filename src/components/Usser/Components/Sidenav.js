import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShippingFast } from 'react-icons/fa';
import { MdDateRange, MdQueryBuilder, MdDashboard } from 'react-icons/md';
import logo from '../../../assets/img/logo.png';
import './styleMascotas.css';
import { Col } from 'react-bootstrap';
import AdminUser from '../AdminUser'; 


const SidebarAdmin = () => {
    return ( 
        
        <Col md={3}>
        <div className="sidebar-container">
            
            <div className="datos-sidebar">
                
            <Link to="/"><img src={logo} alt="Logo veterinaria" className="logo" /></Link>
            </div>
            <ul className="secciones-sidebar">
                <li className="listado-sidebar"><MdDashboard className="icon-sidebar-admin"/> <Link to="/privado/usuario"  className="link-sidebar">Inicio</Link></li>
                <li className="listado-sidebar"><FaUser className="icon-sidebar-admin"/> <Link to="/privado/usuario/mascotas"  className="link-sidebar">Mascotas</Link></li>
                <li className="listado-sidebar"><FaShippingFast className="icon-sidebar-admin"/><Link to="/privado/admin/producto" className="link-sidebar">Productos</Link></li>
                <li className="listado-sidebar"><MdDateRange className="icon-sidebar-admin"/><Link to="/privado/admin/turnos" className="link-sidebar">Turnos</Link></li>
                <li className="listado-sidebar"><MdQueryBuilder className="icon-sidebar-admin"/><Link to="/privado/admin/consultas" className="link-sidebar">Consultas</Link></li>
            </ul>
            
        </div>
        </Col>
     );
}
 
export default SidebarAdmin;