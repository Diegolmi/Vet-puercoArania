import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { MDBBadge } from "mdbreact";
import "./Admin.css";

import { Link, useHistory } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaRegBell } from "react-icons/fa";

const NavbarAdmin = ({ hideSidebar, showSidebar, cambiarBoton }) => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("role");
    history.push("/");
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar-admin">
        {cambiarBoton ? (
          <button className="hideSidebar" onClick={showSidebar}>
            <FaArrowRight />
          </button>
        ) : (
          <button className="hideSidebar" onClick={hideSidebar}>
            <FaArrowLeft />
          </button>
        )}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggle-admin"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-lg-auto">
            <Link to="/" className="mr-3 link-admin">
              Inicio
            </Link>
            <Link to="/about" className="mr-3 link-admin">
              Quienes Somos
            </Link>
            <Link to="/servicios" className="mr-3 link-admin">
              Servicios
            </Link>
            <Link to="/consultas" className="mr-3 link-admin">
              Consultas
            </Link>
            <Link to="/" className="mr-3 link-admin">
              Tienda
            </Link>
          </Nav>
          <hr />
          <Nav>
            <Link className="mr-3 link-admin" to="/admin">
              Perfil
            </Link>
            <Link className="mr-3 link-admin" to="" onClick={logout}>
              Log Out
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarAdmin;
