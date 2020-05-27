import React from 'react';
import SidebarAdmin from './SidebarAdmin';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import './Admin.css';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { FaEnvelopeOpen } from 'react-icons/fa';


const NavbarAdmin = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="navbar-admin">
            {/* <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand> */}
            <Link to="/"><img src={logo} alt="Logo veterinaria" className="logo" /></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle-admin" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="mr-3 link-admin">Inicio</Link>
                    <Link to="/" className="mr-3 link-admin">Consultas</Link>
                    <Link to="/about" className="mr-3 link-admin">Quienes Somos</Link>
                    <Link to="/" className="mr-3 link-admin">Tienda</Link>
                </Nav>
                <hr />
                <Nav>
                    {/* <Link className="mr-3 link-admin icon-admin"><FaEnvelopeOpen /><Badge variant="light">9</Badge></Link> */}
                    <Link className="mr-3 link-admin">Log Out</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        {/* <SidebarAdmin /> */}
        </>
    );
}

export default NavbarAdmin;