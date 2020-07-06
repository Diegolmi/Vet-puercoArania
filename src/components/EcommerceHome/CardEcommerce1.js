import React from "react";
import "./CardEcommerce.css";
import { MDBIcon } from "mdbreact";
import Rating from "./Rating";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import moment from "moment";
import SelectInput from "../SelectInput";

const CardEcommerce1 = ({ productos, addToCart, agregarCantidad }) => {
  let contador = 0;
  const accesoriosArray = productos.filter((producto) => {
    const isAccesorios = producto.category === "Accesorios";
    if (contador < 4 && isAccesorios) {
      contador++;
      return isAccesorios;
    }
  });

  return (
    <>
      <Container fluid>
        <div className="title-container">{/* <h1>Alimentos</h1> */}</div>

        <Row>
          {accesoriosArray.map((producto) => (
            <Col
              lg={3}
              md={6}
              className="contenedor-card-landing"
              key={producto._id}
            >
              <Card className="card-container">
                <Card.Img
                  variant="top"
                  src={producto.urlImage}
                  className="img-food-cards"
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
                  <Button size="sm" className="btn button-card">
                    <MDBIcon className="icon-card" icon="info" />
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => addToCart(producto._id)}
                    className="btn button-card"
                  >
                    <MDBIcon className="icon-card" icon="shopping-cart" />
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CardEcommerce1;
