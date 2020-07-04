import React, { useState } from "react";
import "./CardEcommerce.css";
import { MDBIcon } from "mdbreact";
import Rating from "./Rating";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import moment from "moment";
// import axios from 'axios';
import Modal from "react-bootstrap/Modal";
import axiosInstance from "../util/axiosInstance";
import SelectInput from "../SelectInput";

const CardEcommerce = ({ productos, addToCart, agregarCantidad }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let contador = 0;
  const alimentosArray = productos.filter((producto) => {
    const isAlimento = producto.category === "Alimentos";
    if (contador < 4 && isAlimento) {
      contador++;
      return isAlimento;
    }
  });

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={12} md={6} className="contenedor-card-landing">
            {alimentosArray.map((producto) => (
              <Card className="card-container" key={producto._id}>
                <Card.Img
                  src={producto.urlImage}
                  className="img-fluid img-food-cards"
                />
                <Card.Body>
                  <Card.Title>{producto.name}</Card.Title>
                  <Card.Text>${producto.price}</Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      {moment().startOf().fromNow()}
                    </small>
                  </Card.Text>
                  <Card.Text>
                    <SelectInput 
                      agregarCantidad={agregarCantidad}
                      stock={producto.stock} 
                    />
                  </Card.Text>

                  {/* <Card.Text><SelectInput agregarCantidad={agregarCantidad} productos={productos} /></Card.Text> */}
                </Card.Body>
                <Card.Footer>
                  <Button
                    size="sm"
                    className="btn button-card"
                    onClick={handleShow}
                  >
                    <MDBIcon className="icon-card" icon="info" />
                  </Button>
                  <Button
                    size="sm"
                    className="btn button-card"
                    onClick={() => addToCart(producto._id)}
                  >
                    <MDBIcon className="icon-card" icon="shopping-cart" />
                  </Button>
                </Card.Footer>
              </Card>
            ))}
          </Col>
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
};

export default CardEcommerce;
