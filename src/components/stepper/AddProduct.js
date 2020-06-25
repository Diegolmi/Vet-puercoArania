import React from 'react';
import './carrito.css';
import Table from 'react-bootstrap/Table';
import img10 from '../../assets/img/remedio1.jpg'
// import img11 from '../../assets/img/accesorioperro.jpg'
import { FaTrashAlt } from 'react-icons/fa';
import Envios from './Envios';

const AddProduct = () => {
    const array = [1,1,1,1,1]
    return (
        <>
        <Table className="table-productos-carrito" responsive>
            <thead className="head-add-productos">
                <tr>
                    <th>Imagen</th>
                    <th>Producto</th>
                    <th>Descripción</th>
                    <th>Tipo de Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Total</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody className="listado-productos">
                {array.map(arr => (
                    <tr>
                        <td><img className="img-carrito-producto" src={img10} alt="" /></td>
                        <td>medicamento 1</td>
                        <td>bla bla bla bla</td>
                        <td>Medicamento</td>
                        <td>
                            <select name="" id="">
                                <option value=""></option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                            </select>
                        </td>
                        <td>$250</td>
                        <td>$250</td>
                        <td><button className="button-eliminar-producto"><FaTrashAlt /></button></td>
                    </tr>

                ))}

            </tbody>
        </Table>
        <Envios />
        </>
    );
}

export default AddProduct;