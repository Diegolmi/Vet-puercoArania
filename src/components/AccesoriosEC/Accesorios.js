import React from "react";
import { MDBIcon } from "mdbreact";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./style.css";
import SelectInput from "../SelectInput";

const Accesorios = ({ productos, addToCart, agregarCantidad }) => {
  return (
    <div className="container-cards-store mb-3">
      <h1 className="store-title mt-5 mb-4">Tienda</h1>
      <div className="contenedor_cards">
        {productos.map((producto) => (
          <Card className="card body_card" key={producto._id}>
            <Card.Img
              className="img_acc"
              variant="top"
              src={producto.urlImage}
            />
            <Card.Body>
              <Card.Title>{producto.name}</Card.Title>
              <Card.Text>${producto.price}</Card.Text>
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
        ))}
      </div>
    </div>
  );
};

export default Accesorios;
