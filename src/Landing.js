import React, {useState, useEffect} from 'react';
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
import axiosInstance from './components/util/axiosInstance';
// import GaleriaImagenes from './components/galeria/GaleriaImagenes';


const Landing = () => {
  const [userCarrito, setUserCarrito] = useState([]);


  const mostrarCarrito = async () => {
    const response = await axiosInstance.get('/shoppingCart')
    setUserCarrito(response.data.items || [])
    
  }
   

  useEffect(() => {
    mostrarCarrito()
  }, [])

  return (
    <>
      {/* <Container fluid className="contenedor-principal-landing"> */}
      <Nav 
        userCarrito={userCarrito}
        mostrarCarrito={mostrarCarrito}

      />


      <CarouselPage />

      <div className="rowEcommerce">

        <EcommerceHome 
          userCarrito={userCarrito}
          mostrarCarrito={mostrarCarrito}
        />

      
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