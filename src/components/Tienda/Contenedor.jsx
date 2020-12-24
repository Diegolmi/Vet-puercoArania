import React, { useState, useEffect } from "react";
import Nav from "../Navbar/Nav";
import Swal from "sweetalert2";
import "../Breadcrumbs/style.css";
import Accesorios from "../AccesoriosEC/Accesorios";
import Carousel from "./CarouselTienda";
import "./Tienda.css";
import axiosInstance from "../util/axiosInstance";
import Footer from '../Footer/Footer';



const Contenedor = () => {
  const [productos, setProductos] = useState([]);
  const [userCarrito, setUserCarrito] = useState([]);
  const [cantidad, setCantidad] = useState(1);

  

  // listar productos
  const listarProductos = async () => {
    const response = await axiosInstance.get('/product')

    setProductos(response.data)
  }

  useEffect(() => {
    listarProductos()
  }, [])

  const mostrarCarrito = async () => {
    const response = await axiosInstance.get('/shoppingCart')
    if (response.data) {
      setUserCarrito(response.data.items || [])
    }

  }

  useEffect(() => {
    mostrarCarrito()
  }, [])

  //-----------------------------------------------------
  //crear y agregar al carrito

  const addToCart = async ( id ) => {
     try {
      const response = await axiosInstance.post('/shoppingCart', {product: id, quantity: cantidad})
      setUserCarrito(response.data.items)
      setCantidad(1)
      console.log(response);
      Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Tu Producto fue agregado Exitosamente al Carrito',
          showConfirmButton: false,
          timer: 1500
        })
        mostrarCarrito()
     } catch (error) {
       console.log(error)
     }
        
    }
    

    const agregarCantidad = (e) => {
      setCantidad(e.target.value);
    };

  return (
    <div className="container-footer-tienda">
      <Nav userCarrito={userCarrito} mostrarCarrito={mostrarCarrito} />
      <div className="productos">
        <Carousel />
        <Accesorios
        
          agregarCantidad={agregarCantidad}
          productos={productos}
          addToCart={addToCart}
        />
      </div>
        <Footer />
    </div>
  );
};
export default Contenedor;
