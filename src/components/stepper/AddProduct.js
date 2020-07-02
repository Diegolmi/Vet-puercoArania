import React from 'react';
import './carrito.css';
import Table from 'react-bootstrap/Table';
import { FaTrashAlt } from 'react-icons/fa';
import axiosInstance from '../util/axiosInstance';
import Swal from 'sweetalert2';

const AddProduct = (props, {setUserCarrito}) => {
    const items = props.items || [];
    const {mostrarCarrito} = props
const total =+ items.reduce((acc, item) => {
    return acc + item.product.price * item.quantity
}, 0)

    const borrarProducto = id => async () => {
        const result = await axiosInstance.delete(`/shoppingCart/${id}`)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto fue borrado con exito',
            showConfirmButton: false,
            timer: 1000
          })
          mostrarCarrito()
    }
   

    return (
        <>
        <Table className="table-productos-carrito" responsive>
            <thead className="head-add-productos">
                <tr>
                    <th>Imagen</th>
                    <th>Producto</th>
                    <th>Tipo de Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Total</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody className="listado-productos">
                {items.map(carrito => (
                    <>
                    <tr key={carrito.product._id}>
                        <td><img className="img-carrito-producto" src={carrito.product.urlImage} alt="" /></td>
                        <td>{carrito.product.name}</td>
                        <td>{carrito.product.category}</td>
                        <td>{carrito.quantity}</td>
                        <td>{carrito.product.price}</td>
                        <td>{carrito.product.price * carrito.quantity}</td>
                        <td><button onClick={borrarProducto(carrito.product._id)} className="button-eliminar-producto"><FaTrashAlt /></button></td>
                    </tr>
                        
                    </>
                ))}

            </tbody>
        </Table>
        <div className="total-carrito">
            <p>TOTAL: ${total} </p>
        </div>
        
        </>
    );
}

export default AddProduct;