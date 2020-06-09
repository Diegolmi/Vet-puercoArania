import React, { useState } from 'react';
import NavbarAdmin from './NavbarAdmin';
import FooterAdmin from './FooterAdmin';
import SidebarAdmin from './SidebarAdmin';
import SidebarIcons from './SidebarIcons';

// IMPORT PAGES
import EditUser from './Pages/EditUser';
import AddProduct from './Pages/AddProduct';
import EditarTurnos from './Pages/EditarTurnos';
import AdminConsultas from './Pages/AdminConsultas';
import DatosAdmin from './Pages/DatosAdmin';
import InicioAdmin from './Pages/InicioAdmin';
import {
    BrowserRouter as Router,
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
                        <Col sm={1} className="columna-sidebar"><SidebarIcons /></Col>
                        <Col sm={11} className="container-links-sidebar">
                            <Switch>
                                <Route exact path="/privado/admin" component={InicioAdmin} />
                                <Route exact path="/privado/admin/user" component={EditUser} />
                                <Route exact path="/privado/admin/producto" component={AddProduct} />
                                <Route exact path="/privado/admin/turnos" component={EditarTurnos} />
                                <Route exact path="/privado/admin/consultas" component={AdminConsultas} />
                                <Route exact path="/privado/admin/datosAdmin" component={DatosAdmin} />
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
                        <Col md={3} className="columna-sidebar"><SidebarAdmin /></Col>
                        <Col md={9} className="container-links-sidebar">
                            <Switch>
                                <Route exact path="/privado/admin" component={InicioAdmin} />
                                <Route exact path="/privado/admin/user" component={EditUser} />
                                <Route exact path="/privado/admin/producto" component={AddProduct} />
                                <Route exact path="/privado/admin/turnos" component={EditarTurnos} />
                                <Route exact path="/privado/admin/consultas" component={AdminConsultas} />
                                <Route exact path="/privado/admin/datosAdmin" component={DatosAdmin} />
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