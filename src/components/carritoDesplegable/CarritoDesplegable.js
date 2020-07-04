import React, { useEffect} from 'react';
import './CarritoDesplegable.css';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axiosInstance from '../util/axiosInstance';



const CarritoDesplegable = (props) => {


  const items = props.items || [];
  const {mostrarCarrito} = props
  const borrarProducto = id => async () => {
    const result = await axiosInstance.delete(`/shoppingCart/${id}`)
    mostrarCarrito()
}


  return (
    <>
      {items.map(carrito => (
        <div className="card pb-2 mb-1" key={carrito._id}>
          <div className="contenedor-producto-sidebar">
            <div className="card-body body-sidebar-cart">
              <img className="carrito-sidebar-img" src={carrito.product.urlImage} alt="" />
              
              <p className="border-rigth-left">{carrito.product.name}</p>
              <p className="border-rigth-left">Cantidad: {carrito.quantity}</p>
              
              <p className="border-rigth">$ {carrito.product.price}</p>
            </div>
            <div class="botones-footer-sidebar">
              <button onClick={borrarProducto(carrito.product._id)} className="button-delete-itemcart"><FaTrashAlt className="icon-delete-itemcart" /></button>
              <Link to="/carrito">ir Carrito</Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarritoDesplegable;