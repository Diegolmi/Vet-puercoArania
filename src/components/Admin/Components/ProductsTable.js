import React from 'react';
import { MDBDataTable, MDBBtn } from 'mdbreact';
import '../Admin.css';
import axiosInstance from '../../util/axiosInstance';


const ProductsTable = ({ productos, listaProductos }) => {

    const eliminarProductos = id => async () => {
        const res = await axiosInstance.delete(`/product/${id}`);
        console.log(res);
        listaProductos()
    }

    const data = {
        columns: [
            {
                label: 'Producto',
                field: 'producto',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Imagen',
                field: 'imagen',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Precio',
                field: 'precio',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Cantidad',
                field: 'cantidad',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Descripcion',
                field: 'descripcion',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Tipo',
                field: 'tipo',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Mascota',
                field: 'mascota',
                sort: 'asc',
                width: 100
            },
            {
                label: "Editar",
                field: 'editar',
                sort: 'asc',
                width: 150
            },
            {
                label: "Borrar",
                field: 'borrar',
                sort: 'asc',
                width: 150
            }
        ],

        rows: 
            productos.map(producto => ({
                producto: producto.name,
                 imagen: <img className="img-table-product" src={producto.urlImage} alt=""/>,
                 precio: producto.price,
                 cantidad: producto.stock,
                 descripcion: producto.details,
                 tipo: producto.category,
                 mascota: producto.brand,
                 editar: <MDBBtn color="blue" size="sm">Editar</MDBBtn>,
                borrar: <MDBBtn color="red" size="sm" onClick={eliminarProductos(producto._id)}>Eliminar</MDBBtn>
            }))
            
            
        
    };
    

    return (
        <MDBDataTable
            scrollX
            scrollY
            maxHeight="500px"
            striped
            bordered
            data={data}
        />
    );
}

export default ProductsTable;