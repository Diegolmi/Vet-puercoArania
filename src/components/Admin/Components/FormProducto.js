import React, { useState } from 'react';
import { MDBInput } from "mdbreact";
import Button from 'react-bootstrap/Button';
import axiosInstance from '../../util/axiosInstance';

const FormProducto = () => {

    const [agregarProducto, setAgregarProducto] = useState({
        name: '',
        urlImage: '',
        price: '',
        stock: '',
        details: '',
        category: '',
        brand: ''
    })

   

    const addProductSubmit = async e => {
        e.preventDefault()
        const response = await axiosInstance.post('/product', agregarProducto)
        
        //limpiar formulario
        setAgregarProducto({
            name: '',
            urlImage: '',
            price: '',
            stock: '',
            details: '',
            category: '',
            brand: ''
        })
    }

    const handleChange = (e) => {
        setAgregarProducto({
            ...agregarProducto,
                [e.target.name]: e.target.value
        })
    }



    return (
        <form onSubmit={addProductSubmit}>
            <h2 className="mt-4">Agregar Producto</h2>
            <MDBInput onChange={handleChange} name="name" label="Nombre del Producto" />
            <MDBInput onChange={handleChange} name="urlImage" label="Url Imagen" />
            <MDBInput onChange={handleChange} name="price" label="Precio" type="number" />
            <MDBInput onChange={handleChange} name="stock" label="Cantidad" type="number" />
            <MDBInput onChange={handleChange} name="details" type="textarea" label="Descripción Producto" rows="5" />
            <select onChange={handleChange} name="category" className="browser-default custom-select mb-4">
                <option>Elige tipo de producto</option>
                <option value="Alimentos">Alimentos</option>
                <option value="Accesorios">Accesorios</option>
                <option value="Farmacia">Farmacia</option>
            </select>
            <select onChange={handleChange} name="brand" className="browser-default custom-select mb-4">
                <option>Elige Mascota</option>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
            </select>

            <Button className="bnt-form-product" size="lg" block type="submit">
                Agregar Producto
            </Button>
        </form>
    );
}

export default FormProducto;