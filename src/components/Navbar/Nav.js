import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './styleNav.css';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar className="font-weight-bold navPrincipal"  color="bg-primary" fixed="top" white expand="md" scrolling transparent>
        <MDBNavbarBrand>
             <img src={logo} className="logo" alt="" />

          {/* <strong className="black-text">Navbar</strong> */}
        </MDBNavbarBrand>
        <MDBNavbarToggler   onClick={this.toggleCollapse} />
        <MDBCollapse  id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem  active>
              <MDBNavLink className="letras " to="/">INICIO</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="letras" to="/about">NOSOTROS</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="letras" to="/consultas">CONSULTAS</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="letras" to="/servicios">SERVICIOS</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="letras  d-md-inline">TIENDA</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem className="letras" href="#!">ACCESORIOS</MDBDropdownItem>
                  <MDBDropdownItem className="letras" href="#!">ALIMENTOS</MDBDropdownItem>
                  <MDBDropdownItem className="letras" href="#!">FARMACIA</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
 
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle id="boton_login"caret>
                  INGRESAR
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem className="letras_drop" href="#!">REGISTRARME</MDBDropdownItem>
                  <MDBDropdownItem className="letras_drop" href="#!">INGRESAR</MDBDropdownItem>
                  
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;
