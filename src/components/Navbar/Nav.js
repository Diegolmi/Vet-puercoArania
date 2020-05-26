// import React from 'react';
// import {
//     MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle,
//     MDBDropdownMenu, MDBDropdownItem, MDBCol
// } from 'mdbreact';
// import { BrowserRouter as Router } from 'react-router-dom';
// import logo from '../../assets/img/logo.png'

// import './styleNav.css';


// class FullPageIntroWithFixedTransparentNavbar extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             collapse: false,
//             isWideEnough: false,
//         };
//         this.onClick = this.onClick.bind(this);
//     }

//     onClick() {
//         this.setState({
//             collapse: !this.state.collapse,
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <header>
//                     {/* Comienzo del Navbar */}
//                     <Router>
//                         <MDBNavbar className="font-weight-bold justify-content-center" color="bg-primary" fixed="top" white expand="md" scrolling transparent>
//                             <MDBNavbarBrand href="/">

//                                     <img src={logo} className="logo img-fluid" alt="" />



//                             </MDBNavbarBrand>
//                             {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
//                             <MDBCollapse isOpen={this.state.collapse} navbar>
//                                 <MDBNavbarNav center>
//                                     <MDBNavItem active>
//                                         <MDBNavLink className="letras " to="#">Turnos</MDBNavLink>
//                                     </MDBNavItem>
//                                     <MDBNavItem active>
//                                         <MDBNavLink className="letras" to="#">Consultas</MDBNavLink>
//                                     </MDBNavItem>
//                                     <MDBNavItem active>
//                                         <MDBDropdown>
//                                             <MDBDropdownToggle nav caret active>
//                                                 <div className="letras d-none d-md-inline">Tienda</div>
//                                             </MDBDropdownToggle>
//                                             <MDBDropdownMenu className="dropdown-default">
//                                                 <MDBDropdownItem href="#!">Alimento</MDBDropdownItem>
//                                                 <MDBDropdownItem href="#!">Acessorios</MDBDropdownItem>
//                                                 <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
//                                                 <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
//                                             </MDBDropdownMenu>
//                                         </MDBDropdown>
//                                     </MDBNavItem>
//                                     <MDBNavItem active>
//                                         <MDBNavLink className="letras" to="#">Quienes somos</MDBNavLink>
//                                     </MDBNavItem>
//                                     <MDBNavItem active>
//                                         <MDBDropdown>
//                                             <MDBDropdownToggle nav caret active>
//                                                 <div className="letras d-none d-md-inline">Login</div>
//                                             </MDBDropdownToggle>
//                                             <MDBDropdownMenu className="dropdown-default">
//                                                 <MDBDropdownItem href="#!">Ingresar</MDBDropdownItem>
//                                                 <MDBDropdownItem href="#!">Registro</MDBDropdownItem>

//                                             </MDBDropdownMenu>
//                                         </MDBDropdown>
//                                     </MDBNavItem>

//                                 </MDBNavbarNav>
//                             </MDBCollapse>
//                         </MDBNavbar>
//                     </Router>


//                 </header>


//             </div>
//         );
//     }
// }

// export default FullPageIntroWithFixedTransparentNavbar;

import React, { Component } from "react";
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
// import Image from 'react-bootstrap/Image'
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
      <MDBNavbar className="font-weight-bold" color="bg-primary" fixed="top" white expand="md" scrolling transparent>
        <MDBNavbarBrand>
             <img src={logo} className="logo" alt="" />

          {/* <strong className="black-text">Navbar</strong> */}
        </MDBNavbarBrand>
        <MDBNavbarToggler   onClick={this.toggleCollapse} />
        <MDBCollapse  id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem  active>
              <MDBNavLink className="letras " to="#!">Inicio</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="letras" to="#!">Consultorio</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="letras" to="#!">Quienes Somos</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="letras  d-md-inline">Tienda</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem className="letras" href="#!">Accesorios</MDBDropdownItem>
                  <MDBDropdownItem className="letras" href="#!">Alimentos</MDBDropdownItem>
                  <MDBDropdownItem className="letras" href="#!">Medicamentos</MDBDropdownItem>
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

// class NavbarPage extends Component {

//     render() {
//         return (
//             <Navbar collapseOnSelect expand="lg"  fixed='top' variant="dark" scrolling trasparent > 
//                 <Navbar.Brand href="#home">
//                 <Image src={logo} className="logo" fluid alt="" /> 


//                     </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="mr-auto">
//                         <Nav.Link href="#features">Inicio</Nav.Link>
//                         <Nav.Link href="#pricing">Pricing</Nav.Link>
//                         <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//                             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
//                     <Nav>
//                         <Nav.Link href="#deets">More deets</Nav.Link>
//                         <Nav.Link eventKey={2} href="#memes">
//                             Dank memes
//       </Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>
//         )
//     }




// }
// export default NavbarPage;