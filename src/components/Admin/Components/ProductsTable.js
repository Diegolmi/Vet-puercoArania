import React, { useState } from "react";

import { MDBDataTable } from "mdbreact";

import "../Admin.css";
import axiosInstance from "../../util/axiosInstance";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import ModalProduct from "../Pages/productos/ModalProduct";

const ProductsTable = ({ productos, listaProductos }) => {
  const [show, setShow] = useState(false);
  const [productById, setProductById] = useState({});

  const traerProductoPorId = async (id) => {
    const response = await axiosInstance.get(`/product/${id}`);
    //console.log(response.data);
    setProductById(response.data);
    setShow(true);
  };

  const eliminarProductos = (id) => async () => {
    Swal.fire({
      title: "¿Estas seguro de borrar este producto?",
      text: "Esta acción no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borrarlo!!",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Borrado Exitosamente!!", " ", "success");
        axiosInstance.delete(`/product/${id}`);
        listaProductos();
      }
    });
  };

  const handleChange = (e) => {
    setProductById({ ...productById, [e.target.name]: e.target.value });
  };

  const handleSubmit = (id) => async (e) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto Editado Exitosamente",
      showConfirmButton: false,
      timer: 1000,
    });
    await axiosInstance.put(`/product/${id}`, productById);
    listaProductos();
    setShow(false);
  };

  const data = {
    columns: [
      {
        label: "Producto",
        field: "producto",
        sort: "asc",
        width: 150,
      },
      {
        label: "Imagen",
        field: "imagen",
        sort: "asc",
        width: 150,
      },
      {
        label: "Precio",
        field: "precio",
        sort: "asc",
        width: 150,
      },
      {
        label: "Cantidad",
        field: "cantidad",
        sort: "asc",
        width: 100,
      },
      {
        label: "Tipo",
        field: "tipo",
        sort: "asc",
        width: 150,
      },
      {
        label: "Mascota",
        field: "mascota",
        sort: "asc",
        width: 100,
      },
      {
        label: "Editar",
        field: "editar",
        sort: "asc",
        width: 150,
      },
      {
        label: "Borrar",
        field: "borrar",
        sort: "asc",
        width: 150,
      },
    ],

    rows: productos.map((producto) => ({
      producto: producto.name,
      imagen: (
        <img className="img-table-product" src={producto.urlImage} alt="" />
      ),
      precio: producto.price,
      cantidad: producto.stock,
      // descripcion: producto.details,
      tipo: producto.category,
      mascota: producto.brand,
      editar: (
        <button
          className="boton-editar-user"
          onClick={() => traerProductoPorId(producto._id)}
        >
          <FaEdit />
        </button>
      ),
      borrar: (
        <button
          className="boton-borrar-user"
          onClick={eliminarProductos(producto._id)}
        >
          <FaTrashAlt />
        </button>
      ),
    })),
  };

  return (
    <>
      <MDBDataTable
        scrollX
        scrollY
        maxHeight="650px"
        striped
        bordered
        entriesLabel="Mostrar Entradas"
        searchLabel="Buscar"
        responsiveSm
        responsiveMd
        responsiveLg
        infoLabel={["mostrar", "al", "de", "entradas"]}
        paginationLabel={["anterior", "siguiente"]}
        className="product-table"
        data={data}
      />
      <ModalProduct
        show={show}
        setShow={setShow}
        productById={productById}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default ProductsTable;
