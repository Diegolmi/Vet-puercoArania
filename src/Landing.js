import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import CarouselPage from './components/Carousel/index';
import Nav from './components/Navbar/Nav'
import Footer from './components/Footer/Footer';
// import About from './components/About/about';
import EcommerceHome from './components/EcommerceHome/EcommerceHome';
// import logo from '../src/assets/img/logo.png'
// import Registro from './components/registro'
import './App.css';
import 'mdbreact/dist/css/mdb.css';
import Servicios from './components/Servicios/Servicios';

const Landing = () => {
  return (
    <>
      {/* <Container fluid className="contenedor-principal-landing"> */}
      <Nav />
      <CarouselPage />
      <div className="rowEcommerce">
        <EcommerceHome />
      </div>
      {/* <Row className="rowServicios">
        <Col> */}
      <Servicios />
      {/* </Col> 
      </Row> */}
      {/* </Container> */}
      <Footer />
    </>
  );
}

export default Landing;