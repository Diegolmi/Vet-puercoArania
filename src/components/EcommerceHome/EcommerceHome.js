import React, { useState } from 'react'
import CardEcommerce from './CardEcommerce';
import CardEcommerce1 from './CardEcommerce1'
import CardEcommerce2 from './CardEcommerce2'
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './CardEcommerce.css';


const EcommerceHome = () => {
    const [alimentos, setAlimentos] = useState(true)
    const [accesorios, setAccesorios] = useState(false)
    const [farmacia, setFarmacia] = useState(false)

    const onClickAlimentos = () => {
        setAlimentos(true)
        setAccesorios(false);
        setFarmacia(false)


    }


    const onClickAccesorios = () => {
        setAlimentos(false)
        setAccesorios(true)
        setFarmacia(false)
    }

    const onClickFarmacia = () => {
        setFarmacia(true)
        setAccesorios(false)
        setAlimentos(false)
    }

    return (


        <div className="card-homePage">
            <h2 className="store-title"> #QUEDATEENCASA</h2>
            <h6 className="store-subtitle">Recibí todos nuestros productos en tu hogar. <br/> Comprá en nuestra web o realiza tu pedido por nuestras redes o whatsapp.</h6>
            <div className="button-group">
                <button className="botones-productos" onClick={onClickAlimentos}>Alimentos</button>
                <button className="botones-productos" onClick={onClickAccesorios}>Accesorios</button>
                <button className="botones-productos" onClick={onClickFarmacia}>Farmacia</button>
            </div>
            {alimentos ? <Row>
                <Col md={12} sm={12}><CardEcommerce /></Col>
                <Col md={12} sm={12}>
                    <div className="contenedor-boton-tienda">
                        <button className="btn">IR A LA TIENDA</button>
                    </div>
                </Col>

            </Row> : null}

            {accesorios ? <Row>
                <Col md={12} sm={12}><CardEcommerce1 /></Col>
                <Col md={12} sm={12}>
                    <div className="contenedor-boton-tienda">
                        <button className="btn">Ver Mas ...</button>
                    </div>
                </Col>
            </Row> : null}

            {farmacia ? <Row>
                <Col md={12} sm={12}><CardEcommerce2 /></Col>
                <Col md={12} sm={12}>
                    <div className="contenedor-boton-tienda">
                        <button className="btn">Ver Mas ...</button>
                    </div>
                </Col>
            </Row> : null}
            
            <div className="line"></div>
        </div>
    );
}

export default EcommerceHome;