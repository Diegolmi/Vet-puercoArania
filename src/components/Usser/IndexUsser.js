import React from 'react';
import NavbarAdmin from '../Admin/NavbarAdmin';
import FooterAdmin from '../Admin/FooterAdmin';
import Mascotas from './Components/Mascotas';
import Sidenav from './Components/Sidenav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DatosUsuario from './Components/DatosUsuario';



const IndexUsser = () => {
    return (
        <Container-fluid >
            <NavbarAdmin />
            <Row>
                <Sidenav />
             
            <Col md={4}> 
           <Mascotas />
           <DatosUsuario />
           </Col>
           </Row>    
           <FooterAdmin />
        </Container-fluid>
    )
}

export default IndexUsser

