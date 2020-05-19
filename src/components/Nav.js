import React from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle,
    MDBIcon, MDBDropdownMenu, MDBDropdownItem
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from '../assets/img/logo.png'

import './styleNav.css';


class FullPageIntroWithFixedTransparentNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <div>
                <header>
                    {/* Comienzo del Navbar */}
                    <Router>
                        <MDBNavbar color="bg-primary" fixed="top" white expand="md" scrolling transparent>
                            <MDBNavbarBrand href="/">

                                <img
                                    className="logo"
                                    src={logo} alt=""
                                />
                            </MDBNavbarBrand>
                            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                            <MDBCollapse isOpen={this.state.collapse} navbar>
                                <MDBNavbarNav center>
                                    <MDBNavItem active>
                                        <MDBNavLink className="letras" to="#">Turnos</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem active>
                                        <MDBNavLink className="letras" to="#">Consultas</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem active>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret active>
                                                <div className="letras d-none d-md-inline">Tienda</div>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu className="dropdown-default">
                                                <MDBDropdownItem href="#!">Alimento</MDBDropdownItem>
                                                <MDBDropdownItem href="#!">Acessorios</MDBDropdownItem>
                                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>
                                    <MDBNavItem active>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret active>
                                                <div className="letras d-none d-md-inline">Login</div>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu className="dropdown-default">
                                                <MDBDropdownItem href="#!">Ingresar</MDBDropdownItem>
                                                <MDBDropdownItem href="#!">Registro</MDBDropdownItem>
                                                
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>

                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                    </Router>


                </header>


            </div>
        );
    }
}

export default FullPageIntroWithFixedTransparentNavbar;