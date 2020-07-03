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
import {Animated} from "react-animated-css";
import Swal from 'sweetalert2';
import './CardEcommerce.css';
import axiosInstance from '../util/axiosInstance';
import { Link } from 'react-router-dom';



const EcommerceHome = ({userCarrito, mostrarCarrito}) => {
    const [alimentos, setAlimentos] = useState(true)
    const [accesorios, setAccesorios] = useState(false)
    const [farmacia, setFarmacia] = useState(false)
    const [productos, setProductos] = useState([])
    const [carrito, setCarrito] = useState([]);
    const [cantidad, setCantidad] = useState('')


    const listarProductosHome = async () => {
        const response = await axiosInstance.get('/product')
        
        setProductos(response.data)
    }
    

    useEffect(() => {
        listarProductosHome();
    }, [])


    //crear y agregar al carrito
    const addToCart = async (id) => {
        const response = await axiosInstance.post('/shoppingCart', {product: id, quantity: cantidad})
        
            setCarrito(response.data.items)  
            setCantidad(response.data.quantity)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Tu Producto fue agregado Exitosamente al Carrito',
                showConfirmButton: false,
                timer: 1500
              })
              mostrarCarrito()
      }
      
      //agregar cantidad los productos al carrito
      const agregarCantidad = (e) => {
        setCantidad(
            ...cantidad,
            e.target.value
        )
      }


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
            <Animated animationIn="bounceInLeft" animationInDuration={6000} animationOut="fadeOut" isVisible={true}>
                <h2 className="store-title"> COMPRÁ DESDE CASA</h2>
                <h6 className="store-subtitle">Recibí todos nuestros productos en tu hogar. <br/> Comprá en nuestra web o realiza tu pedido por nuestras redes o whatsapp.</h6>
            </Animated>
            
            <div className="button-group">
               <button className="botones-productos" onClick={onClickAccesorios}><img id="img_prod"src={acces}/>ACCESORIOS</button>
                <button className="botones-productos" onClick={onClickAlimentos}><img id="img_prod"src={alime}/>ALIMENTOS</button>
                <button className="botones-productos" onClick={onClickFarmacia}><img id="img_prod"src={pills}/>FARMACIA</button>
            </div>
            {alimentos ? <Row>
                <Col md={12} sm={12}><CardEcommerce   agregarCantidad={agregarCantidad} productos={productos} addToCart={addToCart} /></Col>
                <Col md={12} sm={12}>
                    <div className="contenedor-boton-tienda">
                        <Link to="/tienda"  className="btn">IR A LA TIENDA</Link>
                    </div>
                </Col>

            </Row> : null}

            {accesorios ? <Row>
                <Col md={12} sm={12}><CardEcommerce1  agregarCantidad={agregarCantidad} productos={productos} addToCart={addToCart} /></Col>
                <Col md={12} sm={12}>
                    <div className="contenedor-boton-tienda">
                        <Link to="/tienda"  className="btn">IR A LA TIENDA</Link>
                    </div>
                </Col>
            </Row> : null}

            {farmacia ? <Row>
                <Col md={12} sm={12}><CardEcommerce2  agregarCantidad={agregarCantidad} productos={productos} addToCart={addToCart}/></Col>
                <Col md={12} sm={12}>
                    <div className="contenedor-boton-tienda">
                        <Link to="/tienda"  className="btn">IR A LA TIENDA</Link>
                    </div>
                </Col>
            </Row> : null}
            
            <div className="line"></div>
        </div>
    );
}

export default EcommerceHome;