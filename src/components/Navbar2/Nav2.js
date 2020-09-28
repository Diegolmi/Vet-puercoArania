import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import "./style.css";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar className="nav_2" dark expand="md">
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <Nav className="ml-lg-auto">
              <Link to="/" className="mr-3 link-admin">
                INICIO
              </Link>
              <Link to="/about" className="mr-3 link-admin">
                NOSOTROS
              </Link>
              <Link to="/servicios" className="mr-3 link-admin">
                SERVICIOS
              </Link>
              <Link to="/tienda" className="mr-3 link-admin">
                TIENDA
              </Link>
            </Nav>
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
