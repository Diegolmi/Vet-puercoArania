import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import CarouselPage from "./components/Carousel/index";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import EcommerceHome from "./components/EcommerceHome/EcommerceHome";
import "./App.css";
import "mdbreact/dist/css/mdb.css";
import Servicios from "./components/Servicios/Servicios";
import axiosInstance from "./components/util/axiosInstance";
import Whatsapp from "./components/Whatsapp/Whatsapp";

const Landing = () => {
  const [userCarrito, setUserCarrito] = useState([]);

  const mostrarCarrito = async () => {
    const response = await axiosInstance.get("/shoppingCart");
    if (response.data) {
      setUserCarrito(response.data.items || []);
    }
  };

  useEffect(() => {
    mostrarCarrito();
  }, []);

  return (
    <>
      <Nav userCarrito={userCarrito} mostrarCarrito={mostrarCarrito} />

      <CarouselPage />

      <div className="rowEcommerce">
        <EcommerceHome
          userCarrito={userCarrito}
          mostrarCarrito={mostrarCarrito}
        />
      </div>

      <Servicios />
      <Whatsapp />

      <Footer />
    </>
  );
};

export default Landing;
