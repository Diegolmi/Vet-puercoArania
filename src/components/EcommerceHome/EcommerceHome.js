import React, { useState, useEffect } from 'react'
import CardEcommerce from './CardEcommerce';
import CardEcommerce1 from './CardEcommerce1'
import CardEcommerce2 from './CardEcommerce2'
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import acces from '../../assets/img/ecommerceLanding/collar.png'
import pills from '../../assets/img/ecommerceLanding/pills.png'
import alime from '../../assets/img/ecommerceLanding/dog-food.png'


import './CardEcommerce.css';
import axiosInstance from '../util/axiosInstance';



const EcommerceHome = () => {
    const [alimentos, setAlimentos] = useState(true)
    const [accesorios, setAccesorios] = useState(false)
    const [farmacia, setFarmacia] = useState(false)
    const [productos, setProductos] = useState([])


    const listarProductosHome = async () => {
        const response = await axiosInstance.get('/product')
        
        setProductos(response.data)
    }

    useEffect(() => {
        listarProductosHome();
    }, [setProductos])

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
            <h2 className="store-title"> COMPRÁ DESDE CASA</h2>
            <h6 className="store-subtitle">Recibí todos nuestros productos en tu hogar. <br/> Comprá en nuestra web o realiza tu pedido por nuestras redes o whatsapp.</h6>
            <div className="button-group">
               <button className="botones-productos" onClick={onClickAccesorios}><img id="img_prod"src={acces}/>ACCESORIOS</button>
                <button className="botones-productos" onClick={onClickAlimentos}><img id="img_prod"src={alime}/>ALIMENTOS</button>
                <button className="botones-productos" onClick={onClickFarmacia}><img id="img_prod"src={pills}/>FARMACIA</button>
            </div>
            {alimentos ? <Row>
                <Col md={12} sm={12}><CardEcommerce productos={productos} /></Col>
                <Col md={12} sm={12}>
                    <div className="contenedor-boton-tienda">
                        <button className="btn">IR A LA TIENDA</button>
                    </div>
                </Col>

            </Row> : null}

            {accesorios ? <Row>
                <Col md={12} sm={12}><CardEcommerce1 productos={productos} /></Col>
                <Col md={12} sm={12}>
                    <div className="contenedor-boton-tienda">
                        <button className="btn">IR A LA TIENDA</button>
                    </div>
                </Col>
            </Row> : null}

            {farmacia ? <Row>
                <Col md={12} sm={12}><CardEcommerce2 productos={productos}/></Col>
                <Col md={12} sm={12}>
                    <div className="contenedor-boton-tienda">
                        <button className="btn">IR A LA TIENDA</button>
                    </div>
                </Col>
            </Row> : null}
            
            <div className="line"></div>
        </div>
    );
}

export default EcommerceHome;