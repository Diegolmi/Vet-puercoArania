import React from 'react';
import NavbarAdmin from './NavbarAdmin';
import FooterAdmin from './FooterAdmin';
import SidebarAdmin from './SidebarAdmin';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Admin.css';



const Admin = () => {
    return ( 
        // <div className="contenedor-admin">
        // <NavbarAdmin />
        // <SidebarAdmin />
        // <FooterAdmin />
        // </div>

        <Container className="contenedor-admin" fluid>
            <Row>
                {/* <Col sm={4}><SidebarAdmin /></Col> */}
                <Col md={12}><NavbarAdmin /></Col>
            </Row>
            <Row>
                <Col md={4}><SidebarAdmin /></Col>
                {/* <Col md={8}><NavbarAdmin /></Col> */}
            </Row>
            <Row>
                <Col sm className="footer-admin"><FooterAdmin /></Col>
                
            </Row>
        </Container>
     );
        
}
 
export default Admin;