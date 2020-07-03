import React, { useState } from 'react';
import NavbarAdmin from './NavbarAdmin';
import FooterAdmin from './FooterAdmin';
import SidebarAdmin from './SidebarAdmin';
import SidebarIcons from './SidebarIcons';

// IMPORT PAGES
import EditUser from './Pages/usuarios/EditUser';
import AddProduct from './Pages/productos/AddProduct';
import EditarTurnos from './Pages/turnos/EditarTurnos';
import AdminConsultas from './Pages/consultas/AdminConsultas';
import DatosAdmin from './Pages/datos admin/DatosAdmin';
import InicioAdmin from './Pages/inicio/InicioAdmin';
import {
    Switch,
    Route,
} from "react-router-dom";

// IMPORT COMPONENT LIBRERIAS Y CSS
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Admin.css';



const Admin = () => {

    const [sidebar, setSidebar] = useState(false)
    const [cambiarBoton, setCambiarBoton] = useState(false)

    const hideSidebar = () => {
        setSidebar(true);
        setCambiarBoton(true)
    }

    const showSidebar = () => {
        setSidebar(false);
        setCambiarBoton(false);
    }


    return (


        <Container className="contenedor-admin" fluid>
            <Row>
                {/* <Col md={2}><div>Side</div></Col> */}
                <Col md={12}><NavbarAdmin
                    hideSidebar={hideSidebar}
                    showSidebar={showSidebar}
                    cambiarBoton={cambiarBoton}
                />
                </Col>
            </Row>

            {sidebar ? 
                    <div>
                    <Row>
                        <Col xs={6} md={2} className="columna-sidebar"><SidebarIcons /></Col>
                        <Col xs={6} md={8} className="container-links-sidebar mr-1">
                            <Switch>
                                <Route exact path="/admin" component={InicioAdmin} />
                                <Route exact path="/admin/user" component={EditUser} />
                                <Route exact path="/admin/producto" component={AddProduct} />
                                <Route exact path="/admin/turnos" component={EditarTurnos} />
                                <Route exact path="/admin/consultas" component={AdminConsultas} />
                                <Route exact path="/admin/datosAdmin" component={DatosAdmin} />
                            </Switch>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm className="footer-admin"><FooterAdmin /></Col>
                    </Row>
                </div>

                :
                <div>
                    <Row>
                        <Col sm={3} className="columna-sidebar"><SidebarAdmin /></Col>
                        <Col sm={9} className="container-links-sidebar">
                            <Switch>
                                <Route exact path="/admin" component={InicioAdmin} />
                                <Route exact path="/admin/user" component={EditUser} />
                                <Route exact path="/admin/producto" component={AddProduct} />
                                <Route exact path="/admin/turnos" component={EditarTurnos} />
                                <Route exact path="/admin/consultas" component={AdminConsultas} />
                                <Route exact path="/admin/datosAdmin" component={DatosAdmin} />
                            </Switch>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm className="footer-admin"><FooterAdmin /></Col>
                    </Row>
                </div>
            }

        </Container>
    );

}

export default Admin;