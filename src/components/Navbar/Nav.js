import React from 'react';
import { Link } from 'react-router-dom';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBDropdown, MDBDropdownToggle,
     MDBDropdownMenu
} from 'mdbreact';
import logo from '../../assets/img/logo.png'

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
                    
                        <MDBNavbar className="navbar-landing" color="bg-primary" fixed="top" expand="md" scrolling transparent>
                            <MDBNavbarBrand href="/">

                                <img
                                    className="logo"
                                    src={logo} alt=""
                                />  
                            </MDBNavbarBrand>
                            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                            <MDBCollapse isOpen={this.state.collapse} navbar>
                                <MDBNavbarNav>
                                    <MDBNavItem active>
                                        <Link to="/">Turnos</Link>
                                    </MDBNavItem>
                                    <MDBNavItem active>
                                    <Link to="/">Consultas</Link>
                                    </MDBNavItem>
                                    <MDBNavItem active>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret>
                                            <Link to="#">Tienda</Link>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu className="dropdown-default">
                                                {/* <MDBDropdownItem href="#!"></MDBDropdownItem>
                                                <MDBDropdownItem href="#!"></MDBDropdownItem>
                                                <MDBDropdownItem href="#!"></MDBDropdownItem> */}
                                                <Link to="#">Alimentos</Link>
                                                <Link to="#">Accesorios</Link>
                                                <Link to="#">Farmacia</Link>

                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>
                                    <MDBNavItem active>
                                        
                                        <Link to="/about">Quienes Somos</Link>
                                    </MDBNavItem>
                                    <MDBNavItem active>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret>
                                                <Link to="#">Login</Link>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu className="dropdown-default">
                                                {/* <MDBDropdownItem href="#!"></MDBDropdownItem> */}
                                                {/* <MDBDropdownItem href="#!"></MDBDropdownItem> */}
                                                <Link to="#">Ingresar</Link>
                                                <Link to="#">Registro</Link>
                                                
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                    


                </header>


            </div>
        );
    }
}

export default FullPageIntroWithFixedTransparentNavbar;