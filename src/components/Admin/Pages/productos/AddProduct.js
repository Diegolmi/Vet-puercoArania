import React, { useState, useEffect } from "react";
import ProductsTable from "../../Components/ProductsTable";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import FormProducto from "../../Components/FormProducto";
import axiosInstance from "../../../util/axiosInstance";

const AddProduct = () => {
  const [productos, setProductos] = useState([]);

  const listaProductos = async () => {
    const response = await axiosInstance.get("/product");

    setProductos(response.data);
  };

  useEffect(() => {
    listaProductos();
  }, [setProductos]);

  return (
    <div className="container-productos-admin my-3">
      <div className="row">
        <div className="col-10">
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
          >
            <Tab eventKey="home" title="Agregar Producto">
              <FormProducto />
            </Tab>
            <Tab eventKey="profile" title="Lista Productos">
              <ProductsTable
                productos={productos}
                listaProductos={listaProductos}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
