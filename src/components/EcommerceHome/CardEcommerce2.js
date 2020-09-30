import React from "react";
import "./CardEcommerce.css";
import { MDBIcon } from "mdbreact";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import moment from "moment";
import SelectInput from "../SelectInput";

const CardEcommerce2 = ({ productos, addToCart, agregarCantidad }) => {
  let contador = 0;
  const farmaciaArray = productos.filter((producto) => {
    const isFarmacia = producto.category === "Farmacia";
    if (contador < 4 && isFarmacia) {
      contador++;
      return isFarmacia;
    }else {
      return contador = 0;
    }
  });

  return (
    <>
      <Container fluid>
        <div className="title-container">{/* <h1>Farmacia</h1> */}</div>

        <Row>
          {farmaciaArray.map((producto) => (
            <Col
              lg={3}
              md={6}
              className="contenedor-card-landing"
              key={producto._id}
              d
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
                  {producto.stock === 0 ? <Button
                    size="sm"
                    onClick={() => addToCart(producto._id)}
                    className="btn button-card"
                    disabled
                  >
                    <MDBIcon className="icon-card" icon="shopping-cart" />
                  </Button> : <Button
                    size="sm"
                    onClick={() => addToCart(producto._id)}
                    className="btn button-card"
                  >
                    <MDBIcon className="icon-card" icon="shopping-cart" />
                  </Button> }
                  
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CardEcommerce2;
