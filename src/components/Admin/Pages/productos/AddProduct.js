import React, { useState, useEffect } from "react";
import ProductsTable from "../../Components/ProductsTable";
import axiosInstance from "../../../util/axiosInstance";
import '../../Admin.css'
import ModalAddProduct from "./ModalAddProduct";

const AddProduct = () => {
  const [productos, setProductos] = useState([]);
  const [show, setShow] = useState(false);

  const listaProductos = async () => {
    const response = await axiosInstance.get("/product");

    setProductos(response.data);
  };

  useEffect(() => {
    listaProductos();
  }, [setProductos]);

  const openModal = () => {
    setShow(true)
  }

  return (
    <div className="container-productos-admin my-3">
      <h2>Productos</h2>
      <div className="boton-agregar-producto">
        <button className="button-add mr-2" onClick={openModal}>Agregar Productos</button>
      </div>
      <div className="row">
        <div className="col-10">
          {/* <FormProducto listaProductos={listaProductos} /> */}
          <ProductsTable
                productos={productos}
                listaProductos={listaProductos}
              />
              <ModalAddProduct listaProductos={listaProductos} show={show} setShow={setShow} />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
