import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import CarouselPage from './components/Carousel/index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from './components/Navbar/Nav'
import Footer from './components/Footer/Footer';
// import About from './components/About/about';
import EcommerceHome from './components/EcommerceHome/EcommerceHome';
// import logo from '../src/assets/img/logo.png'
// import Registro from './components/registro'
import './App.css';
import 'mdbreact/dist/css/mdb.css';
import Servicios from './components/Servicios/Servicios';
import Accesorios from './components/AccesoriosEC/Accesorios'



function App() {
  return (

    <Container fluid>
      <Row className="rowNav">
        <Col>
          <Nav />
        </Col>
         </Row>
   
      {/* </Row>
      <Row className="rowCarousel">
        <Col>
          <CarouselPage />
        </Col>
      </Row>
      <div className="rowEcommerce">
        
          <EcommerceHome />
        
        </div>
        <Row className="rowServicios">
        <Col>
          <Servicios />
        </Col>
      
      </Row>
       */}
         <Col>
          <Accesorios />
        </Col>
        
          {/*<Footer />*/}
        
      </Container>






  );
}

export default App;
