import React, { useState } from "react";
import "./CardEcommerce.css";
import { MDBIcon } from "mdbreact";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import moment from "moment";
import SelectInput from "../SelectInput";
import ModalProductos from "./ModalProductos";



const CardEcommerce = ({ productos, addToCart, agregarCantidad }) => {
  
  const [show, setShow] = useState(false);

  
  const handleShow = () => setShow(true);

  let contador = 0;
  const alimentosArray = productos.filter((producto) => {
    const isAlimento = producto.category === "Alimentos";
    if (contador < 4 && isAlimento) {
      contador++;
      return isAlimento;
    }else{
      return contador = 0;
    }
  });
  return (
    <>
      <Container fluid>
        <Row>
          {alimentosArray.map( producto => (
            <Col key={producto._id} lg={3} md={6} className="contenedor-card-landing">
              <Card className="card-container">
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

                </Card.Body>
                <Card.Footer>
                  <Button
                    size="sm"
                    className="btn button-card"
                    onClick={handleShow}
                  >
                    <MDBIcon className="icon-card" icon="info" />
                  </Button>
                  {producto.stock === 0 ? <Button
                    size="sm"
                    className="btn button-card"
                    onClick={() => addToCart(producto._id)}
                    disabled
                  >
                    <MDBIcon className="icon-card" icon="shopping-cart" />
                  </Button> : <Button
                    size="sm"
                    className="btn button-card"
                    onClick={() => addToCart(producto._id)}
                  >
                    <MDBIcon className="icon-card" icon="shopping-cart" />
                  </Button>}
                  <ModalProductos show={show} setShow={setShow} producto={producto} />
                </Card.Footer>
              </Card>
              
            </Col>
          ))}
        </Row>
      </Container>
      
    </>
  );
};

export default CardEcommerce;
