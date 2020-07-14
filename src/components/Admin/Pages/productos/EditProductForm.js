import React from "react";
import { MDBInput } from "mdbreact";
import Button from "react-bootstrap/Button";

const EditProductForm = ({ productById, handleChange, handleSubmit }) => {
  const {
    _id,
    name,
    urlImage,
    price,
    stock,
    details,
    category,
    brand,
  } = productById;

  return (
      
    <form onSubmit={handleSubmit}>
      <MDBInput
        onChange={handleChange}
        value={name}
        name="name"
        label="Nombre del Producto"
      />
      <MDBInput
        onChange={handleChange}
        value={urlImage}
        name="urlImage"
        label="Url Imagen"
      />
      <MDBInput
        onChange={handleChange}
        value={price}
        name="price"
        label="Precio"
        type="number"
      />
      <MDBInput
        onChange={handleChange}
        value={stock}
        name="stock"
        label="Cantidad"
        type="number"
      />
      <MDBInput
        onChange={handleChange}
        value={details}
        name="details"
        type="textarea"
        label="Descripción Producto"
        rows="5"
      />
      <select
        onChange={handleChange}
        value={category}
        name="category"
        className="browser-default custom-select mb-4"
      >
        <option>Elige tipo de producto</option>
        <option value="Alimentos">Alimentos</option>
        <option value="Accesorios">Accesorios</option>
        <option value="Farmacia">Farmacia</option>
      </select>
      <select
        onChange={handleChange}
        value={brand}
        name="brand"
        className="browser-default custom-select mb-4"
      >
        <option>Elige Mascota</option>
        <option value="Perro">Perro</option>
        <option value="Gato">Gato</option>
      </select>

      <Button
        className="bnt-form-product"
        size="lg"
        block
        type="submit"
        onClick={handleSubmit(_id)}
      >
        Editar Producto
      </Button>
    </form>
  );
};

export default EditProductForm;
