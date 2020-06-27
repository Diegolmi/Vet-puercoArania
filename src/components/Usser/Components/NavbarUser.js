import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { MDBBadge } from "mdbreact";
import './styleMascotas.css';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaRegBell } from 'react-icons/fa';
//import { AiOutlineMail } from 'react-icons/ai';


const NavbarAdmin = ({ hideSidebar, showSidebar, cambiarBoton }) => {
    
    
    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="navbar-user">
            {cambiarBoton ? <button className="hideSidebar" onClick={showSidebar}><FaArrowRight /></button> 
            :  <button className="hideSidebar" onClick={hideSidebar}><FaArrowLeft /></button>  }
            
            
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle-admin" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-lg-auto">
                    <Link to="/" className="mr-3 link-admin">Inicio</Link>
                    <Link to="/consultas" className="mr-3 link-admin">Consultas</Link>
                    <Link to="/about" className="mr-3 link-admin">Quienes Somos</Link>
                    <Link to="/" className="mr-3 link-admin">Tienda</Link>
                </Nav>
                <hr />
                <Nav>
                    {/* <Link className="mr-3 link-admin"><AiOutlineMail /><MDBBadge color="danger" className="ml-2">4</MDBBadge></Link> */}
                    <Link className="mr-3 link-admin"><FaRegBell /><MDBBadge color="danger" className="ml-2">4</MDBBadge></Link>
                    <Link className="mr-3 link-admin">Log Out</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        {/* <SidebarAdmin /> */}
        </>
    );
}

export default NavbarAdmin;