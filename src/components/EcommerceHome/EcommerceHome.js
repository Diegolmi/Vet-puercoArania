import React from 'react'
import CardEcommerce from './CardEcommerce';
import CardEcommerce1 from './CardEcommerce1'
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Overlay from './Overlay';
import './CardEcommerce.css';


const EcommerceHome = () => {
    return (
        // <div className="contenedor-cards">
        //     <div className="title-products-section">
        //         <h1>Conoce Nuestros Productos</h1>
        //     </div>

        //     <div>
        //         {/* <h1>Conoce nuestros Productos</h1> */}
        //         <CardEcommerce />
        //     </div>

        //     <br />


        //     <div>
        //         {/* <h1>Conoce nuestros Productos</h1> */}
        //         <CardEcommerce1 />
        //     </div>

        //    

        // </div>

        <div className="card-homePage">
            <h1>Conoce Nuestros Productos</h1>
            <Row>
                <Col lg={4} xs={12}><Overlay /></Col>
                <Col lg={8} xs={12}><CardEcommerce /></Col> 
            </Row>

            <Row>
                <Col md={12} sm={12}><CardEcommerce1 /></Col>
            </Row>
            <div className="contenedor-boton-tienda">
             <button className="btn">Ingresa a Nuestra Tienda</button>
            </div>
        </div>
    );
}

export default EcommerceHome;