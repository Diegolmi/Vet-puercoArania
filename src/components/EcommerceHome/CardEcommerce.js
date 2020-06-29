import React, { useState } from 'react';
import './CardEcommerce.css';
import { MDBIcon } from 'mdbreact';
import Rating from './Rating'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import moment from 'moment';
// import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import axiosInstance from '../util/axiosInstance';
// import db from '../../db.json';



const CardEcommerce = ({ productos }) => {
  
  const [carrito, setCarrito] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let contador = 0
  const alimentosArray = productos.filter(producto => {

    const isAlimento = producto.category === 'Alimentos'
    if( contador < 4 && isAlimento ){
      contador++
      return  isAlimento
    }
    
  })

  //agregar al carrito

  const addToCart = async () => {
    const response = await axiosInstance.post('/shoppingCart', carrito)
    setCarrito(response)
    console.log(response)
  }
  
  return (
    <>
      <Container fluid>

        <div className="title-container">
          {/* <h1>Accesorios</h1> */}
        </div>
        <Row>

          {alimentosArray.map((producto) => (
            <Col lg={3} md={6} key={producto._id}>
              <Card className="card-container">
                <Card.Img src={producto.urlImage} className="img-fluid" />
                <Card.Body>
                  <Card.Title>{producto.name}</Card.Title>
                  <Card.Text>${producto.price}</Card.Text>
                  <Card.Text><small className="text-muted">{moment().startOf().fromNow()}</small></Card.Text>
                  <Card.Text className="rating"><Rating /></Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button size="sm" className="btn button-card" onClick={handleShow}><MDBIcon className="icon-card" icon="info" /></Button>
                  <Button size="sm" className="btn button-card" onClick={addToCart}><MDBIcon className="icon-card" icon="shopping-cart" /></Button>
                </Card.Footer>
              </Card>
            </Col>

          ))}
        </Row>
      </Container>

      {/* MODAL */}
      {/* <Button variant="primary" >
        Launch demo modal
      </Button> */}
      
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
         <Modal.Title>informacion producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>descripcion del producto</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

    

      
    </>


  );
}

export default CardEcommerce;