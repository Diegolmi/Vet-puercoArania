import React, { useState } from "react";
import { MDBInput } from "mdbreact";
import Button from "react-bootstrap/Button";
import axiosInstance from "../../util/axiosInstance";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const FormProducto = ({ listaProductos }) => {
  const { register, errors, handleSubmit } = useForm();
  const [agregarProducto, setAgregarProducto] = useState({
    name: "",
    urlImage: "",
    price: "",
    stock: "",
    details: "",
    category: "",
    brand: "",
  });

  const handleChange = (e) => {
    setAgregarProducto({
      ...agregarProducto,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (data) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    axiosInstance.post("/product", agregarProducto);
    listaProductos();
    //limpiar formulario
    setAgregarProducto({
      name: "",
      urlImage: "",
      price: "",
      stock: "",
      details: "",
      category: "",
      brand: "",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="mt-4">Agregar Producto</h2>
      <MDBInput
        onChange={handleChange}
        name="name"
        label="Nombre del Producto"
        inputRef={register({
          required: {
            value: true,
            message: "ingresa el nombre del producto",
          },
        })}
      />
      <span className="text-danger text-small">
        {errors.name && errors.name.message}
      </span>

      <MDBInput
        onChange={handleChange}
        name="urlImage"
        label="Url Imagen"
        inputRef={register({
          required: {
            value: true,
            message: "ingresa la URL de la imagen",
          },
        })}
      />
      <span className="text-danger text-small">
        {errors.urlImage && errors.urlImage.message}
      </span>
      <MDBInput
        onChange={handleChange}
        name="price"
        label="Precio"
        type="number"
        inputRef={register({
          required: {
            value: true,
            message: "ingresa el precio del producto",
          },
        })}
      />
      <span className="text-danger text-small">
        {errors.price && errors.price.message}
      </span>
      <MDBInput
        onChange={handleChange}
        name="stock"
        label="Cantidad"
        type="number"
        inputRef={register({
          required: {
            value: true,
            message: "La Cantidad de stock es necesaria",
          },
        })}
      />
      <span className="text-danger text-small">
        {errors.stock && errors.stock.message}
      </span>
      <MDBInput
        onChange={handleChange}
        name="details"
        type="textarea"
        label="Descripción Producto"
        rows="5"
        inputRef={register({
          required: {
            value: true,
            message: "ingrese una descripción del producto",
          },
          maxLength: {
            value: 500,
            message: "No más de 500 carácteres!",
          },
          minLength: {
            value: 15,
            message: "Mínimo 15 carácteres",
          },
        })}
      />
      <span className="text-danger text-small">
        {errors.details && errors.details.message}
      </span>
      <select
        onChange={handleChange}
        name="category"
        className="browser-default custom-select mb-4"
        required
      >
        <option>Elige tipo de producto</option>
        <option value="Alimentos">Alimentos</option>
        <option value="Accesorios">Accesorios</option>
        <option value="Farmacia">Farmacia</option>
      </select>

      <select
        onChange={handleChange}
        name="brand"
        className="browser-default custom-select mb-4"
        required
      >
        <option>Elige Mascota</option>
        <option value="Perro">Perro</option>
        <option value="Gato">Gato</option>
      </select>

      <Button className="bnt-form-product" size="lg" block type="submit">
        Agregar Producto
      </Button>
    </form>
  );
};

export default FormProducto;
