import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import logo from '../../assets/img/logo.png'
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
              <MDBNavLink className="letras " to="/">Inicio</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="letras" to="/consultas">Consultas</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="letras" to="servicios">Servicios</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="letras" to="/about">Quienes Somos</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="letras  d-md-inline">Tienda</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem className="letras" href="#!">Accesorios</MDBDropdownItem>
                  <MDBDropdownItem className="letras" href="#!">Alimentos</MDBDropdownItem>
                  <MDBDropdownItem className="letras" href="#!">Farmacia</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
 
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle caret>
                  Login
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem className="letras" href="#!">Registros</MDBDropdownItem>
                  <MDBDropdownItem className="letras" href="#!">Login</MDBDropdownItem>
                  
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
