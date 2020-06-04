import React from "react";
import "./farmacia.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


const FarmaciaNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="#fc5185" variant="#fc5185">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Especie" id="collasible-nav-dropdown"color="#f0f0f0">
            <NavDropdown.Item href="#action/3.1">Gato</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Perro</NavDropdown.Item>
          </NavDropdown>
          <Nav className="mr-auto">
            <NavDropdown title="Raza" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Raza1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Raza2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mr-auto">
            <NavDropdown title="Edad" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cachorro</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Adulto</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default FarmaciaNav;
