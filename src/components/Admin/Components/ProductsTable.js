import React from 'react';
import { MDBDataTable, MDBBtn } from 'mdbreact';

const ProductsTable = () => {
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
        rows: [
            {
                producto: 'Eukanuba',
                imagen: 'url',
                precio: '$ 500',
                cantidad: '20',
                descripcion: 'descripcion del producto',
                tipo: 'Alimentos',
                mascota: 'Perro',
                editar: <MDBBtn color="blue" size="sm">Editar</MDBBtn>,
                borrar: <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
            },
            {
                producto: 'Eukanuba',
                imagen: 'url',
                precio: '$ 500',
                cantidad: '20',
                descripcion: 'descripcion del producto',
                tipo: 'Alimentos',
                mascota: 'Perro',
                editar: <MDBBtn color="blue" size="sm">Editar</MDBBtn>,
                borrar: <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
            },
            {
                producto: 'Eukanuba',
                imagen: 'url',
                precio: '$ 500',
                cantidad: '20',
                descripcion: 'descripcion del producto',
                tipo: 'Alimentos',
                mascota: 'Perro',
                editar: <MDBBtn color="blue" size="sm">Editar</MDBBtn>,
                borrar: <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
            },
            {
                producto: 'Eukanuba',
                imagen: 'url',
                precio: '$ 500',
                cantidad: '20',
                descripcion: 'descripcion del producto',
                tipo: 'Alimentos',
                mascota: 'Perro',
                editar: <MDBBtn color="blue" size="sm">Editar</MDBBtn>,
                borrar: <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
            },
            {
                producto: 'Eukanuba',
                imagen: 'url',
                precio: '$ 500',
                cantidad: '20',
                descripcion: 'descripcion del producto',
                tipo: 'Alimentos',
                mascota: 'Perro',
                editar: <MDBBtn color="blue" size="sm">Editar</MDBBtn>,
                borrar: <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
            },
            {
                producto: 'Eukanuba',
                imagen: 'url',
                precio: '$ 500',
                cantidad: '20',
                descripcion: 'descripcion del producto',
                tipo: 'Alimentos',
                mascota: 'Perro',
                editar: <MDBBtn color="blue" size="sm">Editar</MDBBtn>,
                borrar: <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
            },
            {
                producto: 'Eukanuba',
                imagen: 'url',
                precio: '$ 500',
                cantidad: '20',
                descripcion: 'descripcion del producto',
                tipo: 'Alimentos',
                mascota: 'Perro',
                editar: <MDBBtn color="blue" size="sm">Editar</MDBBtn>,
                borrar: <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
            },
            {
                producto: 'Eukanuba',
                imagen: 'url',
                precio: '$ 500',
                cantidad: '20',
                descripcion: 'descripcion del producto',
                tipo: 'Alimentos',
                mascota: 'Perro',
                editar: <MDBBtn color="blue" size="sm">Editar</MDBBtn>,
                borrar: <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
            },
            {
                producto: 'Eukanuba',
                imagen: 'url',
                precio: '$ 500',
                cantidad: '20',
                descripcion: 'descripcion del producto',
                tipo: 'Alimentos',
                mascota: 'Perro',
                editar: <MDBBtn color="blue" size="sm">Editar</MDBBtn>,
                borrar: <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
            },
            {
                producto: 'Eukanuba',
                imagen: 'url',
                precio: '$ 500',
                cantidad: '20',
                descripcion: 'descripcion del producto',
                tipo: 'Alimentos',
                mascota: 'Perro',
                editar: <MDBBtn color="blue" size="sm">Editar</MDBBtn>,
                borrar: <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
            },
            {
                producto: 'Eukanuba',
                imagen: 'url',
                precio: '$ 500',
                cantidad: '20',
                descripcion: 'descripcion del producto',
                tipo: 'Alimentos',
                mascota: 'Perro',
                editar: <MDBBtn color="blue" size="sm">Editar</MDBBtn>,
                borrar: <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
            },
            {
                producto: 'Eukanuba',
                imagen: 'url',
                precio: '$ 500',
                cantidad: '20',
                descripcion: 'descripcion del producto',
                tipo: 'Alimentos',
                mascota: 'Perro',
                editar: <MDBBtn color="blue" size="sm">Editar</MDBBtn>,
                borrar: <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
            },
            {
                producto: 'Eukanuba',
                imagen: 'url',
                precio: '$ 500',
                cantidad: '20',
                descripcion: 'descripcion del producto',
                tipo: 'Alimentos',
                mascota: 'Perro',
                editar: <MDBBtn color="blue" size="sm">Editar</MDBBtn>,
                borrar: <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
            },
            {
                producto: 'Eukanuba',
                imagen: 'url',
                precio: '$ 500',
                cantidad: '20',
                descripcion: 'descripcion del producto',
                tipo: 'Alimentos',
                mascota: 'Perro',
                editar: <MDBBtn color="blue" size="sm">Editar</MDBBtn>,
                borrar: <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
            },
            {
                producto: 'Eukanuba',
                imagen: 'url',
                precio: '$ 500',
                cantidad: '20',
                descripcion: 'descripcion del producto',
                tipo: 'Alimentos',
                mascota: 'Perro',
                editar: <MDBBtn color="blue" size="sm">Editar</MDBBtn>,
                borrar: <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
            },

            


        ]
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