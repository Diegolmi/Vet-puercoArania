import React, { useState } from 'react'
import NavbarUser from './Components/NavbarUser';
import FooterAdmin from '../Admin/FooterAdmin';
import Sidenav from './Components/Sidenav';
import SideNavicons from './Components/sideNavicons';

import IndexUsser from './IndexUsser';
import Mascotas from './Components/Mascotas';
import DatosUsuario from './Components/DatosUsuario';
// import Turnos from './Components/Turnos/Turnos';
// import Carrito from '../stepper/Carrito';
import { 

    Switch,
    Route,

} from "react-router-dom";
import './Components/styleMascotas.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AdminUser = () => {

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
        <>
            <Container className="Contenedor-usuario" fluid>
                <Row>
                    <Col md={12}><NavbarUser
                        hideSidebar={hideSidebar}
                        showSidebar={showSidebar}
                        cambiarBoton={cambiarBoton}
                    />
                    </Col>
                </Row>
                {sidebar ?
                    <div>

                        <div className="columna-sidebar" md="3">
                            <SideNavicons />
                        </div>
                        <div className="container-links-sidebar1">
                            <Switch>
                                <Route exact path="/usuario" component={IndexUsser} />
                                <Route exact path="/usuario/mascotas" component={Mascotas} />
                                <Route exact path="/usuario/datos" component={DatosUsuario} />

                            </Switch>
                        </div>


                    </div>

                    :
                    <div>

                        <div className="columna-sidebar">
                            <Sidenav />
                        </div>
                        <div className="container-links-sidebar">
                            <Switch>
                                <Route exact path="/usuario" component={IndexUsser} />
                                <Route exact path="/usuario/mascotas" component={Mascotas} />
                                <Route exact path="/usuario/datos" component={DatosUsuario} />
                            </Switch>
                        </div>


                    </div>
                }

            </Container>
            <Row>
                <Col sm className="footer-admin"><FooterAdmin /></Col>
            </Row>
        </>
    )
}

export default AdminUser;