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
          </div>
        </div>
      ))}
    </>
  );
}


export default CarritoDesplegable;