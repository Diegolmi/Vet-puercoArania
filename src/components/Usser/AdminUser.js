import React, {useState} from 'react'
import NavbarUser from './Components/NavbarUser';
import FooterAdmin from '../Admin/FooterAdmin';
import Sidenav from './Components/Sidenav';
import SideNavicons from './Components/sideNavicons';

import IndexUsser from './IndexUsser';
import Mascotas from './Components/Mascotas';
import DatosUsuario from './Components/DatosUsuario';
import { 
    Switch,
    Route,

} from "react-router-dom";

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
                    <Row>
                        <Col sm={1} className="columna-sidebar"><SideNavicons /></Col>
                        <Col sm={11} className="container-links-sidebar">
                            <Switch>
                                <Route exact path="/privado/usuario" component={IndexUsser} />
                                <Route exact path="/privado/usuario/mascotas" component={Mascotas} />
                                <Route exact path="/privado/usuario/datos" component={DatosUsuario} />

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
                        <Col md={3} className="columna-sidebar"><Sidenav /></Col>
                        <Col md={9} className="container-links-sidebar">
                            <Switch>
                                <Route exact path="/privado/usuario" component={IndexUsser} />
                                <Route exact path="/privado/usuario/mascotas" component={Mascotas} />
                                <Route exact path="/privado/usuario/datos" component={DatosUsuario} />
                            </Switch>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm className="footer-admin"><FooterAdmin /></Col>
                    </Row>
                </div>
            }  
        </Container>
    )
}

export default AdminUser;
