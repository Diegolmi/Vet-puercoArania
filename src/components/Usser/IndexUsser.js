import React from 'react';
//import FooterAdmin from '../Admin/FooterAdmin';
//import Mascotas from './Components/Mascotas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import DatosUsuario from './Components/DatosUsuario';
import Turnos from './Components/Turnos/Turnos';

const IndexUsser = () => {
    return (
        <Container-fluid >
            <Row>
                
             <Turnos />
            <Col md={4}> 
           
           </Col>
           </Row>    
           {/*<FooterAdmin />*/}
        </Container-fluid>
    )
}

export default IndexUsser

