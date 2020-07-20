<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import './CarritoDesplegable.css';
import axiosInstance from '../util/axiosInstance';
import { useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';



const CarritoDesplegable = () => {
  // const [listarCarrito, setListarCarrito] = useState([]);


  // const imprimirCarrito = async () => {
  //   const response = await axiosInstance.get('/shoppingCart')
  //   setListarCarrito(response)
  //   console.log(response);
  // }

  // useEffect(() => {
  //   imprimirCarrito()
  // }, [])
  const array = [1, 2, 3, 4, 5]



  return (
    // <>
    // {listarCarrito.map(carrito => (


    // ))}
    // </>
    <>
      {array.map(arr => (
        <div className="card card-carrito">
          <div className="contenedor-producto-sidebar">
            <p>nombre del producto</p>
            <p>precio del poducto</p>
            <button><FaTrashAlt /></button>
=======
>>>>>>> 4de8003f8c0e181d261780caa69c1fdb5a3b6084
import React, { useEffect } from "react";
import "./CarritoDesplegable.css";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import axiosInstance from "../util/axiosInstance";

const CarritoDesplegable = (props) => {
  const items = props.items || [];
  const { mostrarCarrito } = props;
  const borrarProducto = (id) => async () => {
    const result = await axiosInstance.delete(`/shoppingCart/${id}`);
    mostrarCarrito();
  };

  return (
    <>
      {items.map((carrito) => (
        <div className="card pb-2 mb-1" key={carrito._id}>
          <div className="contenedor-producto-sidebar">
            <div className="card-body body-sidebar-cart">
              <img
                className="carrito-sidebar-img"
                src={carrito.product.urlImage}
                alt=""
              />

              <p className="border-rigth-left">{carrito.product.name}</p>
              <p className="border-rigth-left">Cantidad: {carrito.quantity}</p>

              <p className="border-rigth">$ {carrito.product.price}</p>
            </div>
            <div class="botones-footer-sidebar">
              <button
                onClick={borrarProducto(carrito.product._id)}
                className="button-delete-itemcart"
              >
                <FaTrashAlt className="icon-delete-itemcart" />
              </button>
              <Link to="/carrito">ir Carrito</Link>
            </div>
<<<<<<< HEAD
=======
>>>>>>> 9702e523b21e5fecc2debfd609a1a143461ce8f8
>>>>>>> 4de8003f8c0e181d261780caa69c1fdb5a3b6084
          </div>
        </div>
      ))}
    </>
  );
<<<<<<< HEAD
};

export default CarritoDesplegable;
=======
<<<<<<< HEAD
}

export default CarritoDesplegable;
=======
};

export default CarritoDesplegable;
>>>>>>> 9702e523b21e5fecc2debfd609a1a143461ce8f8
>>>>>>> 4de8003f8c0e181d261780caa69c1fdb5a3b6084
