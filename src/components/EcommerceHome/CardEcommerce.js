import React, { useState } from 'react';
import img1 from '../../assets/img/paraTienda.jpg'
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
// import db from '../../db.json';


const CardEcommerce = () => {
  const array = [1, 2, 3, 4];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Container fluid>

        <div className="title-container">
          {/* <h1>Accesorios</h1> */}
        </div>
        <Row>

          {array.map(arr => (
            <Col lg={3} md={6} key={arr}>
              <Card className="card-container">
                <Card.Img variant="top" src={img1} className="img-fluid" />
                <Card.Body>
                  <Card.Title>Nombre de Alimentos</Card.Title>
                  <Card.Text>$249,80</Card.Text>
                  <Card.Text><small className="text-muted">{moment().startOf().fromNow()}</small></Card.Text>
                  <Card.Text className="rating"><Rating /></Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button size="sm" className="btn button-card" onClick={handleShow}><MDBIcon className="icon-card" icon="info" /></Button>
                  <Button size="sm" className="btn button-card"><MDBIcon className="icon-card" icon="shopping-cart" /></Button>
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