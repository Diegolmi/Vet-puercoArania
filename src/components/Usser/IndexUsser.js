import React from 'react';
import NavbarAdmin from '../Admin/NavbarAdmin';
import FooterAdmin from '../Admin/FooterAdmin';
import Bienvenida from './Components/Bienvenida';
import Mascotas from './Components/Mascotas';
import Sidenav from './Components/Sidenav';
import EditarMascotas from './Components/EditarMascotas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const IndexUsser = () => {
    return (
        <Container-fluid>
            <NavbarAdmin />
            <Sidenav />



            <Row>
                <Col sm={11}> <Bienvenida /></Col>
            </Row>



            
            
            <Mascotas />    
            
            
                <EditarMascotas />
        

            <FooterAdmin />
        </Container-fluid>
    )
}

export default IndexUsser

