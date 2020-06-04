import React from 'react';

import { MDBInput } from "mdbreact";
import Button from 'react-bootstrap/Button';

const FormProducto = () => {
    return (
        <form>
            <h2 className="mt-4">Agregar Producto</h2>
            <MDBInput label="Nombre del Producto" />
            <MDBInput label="Url Imagen" />
            <MDBInput label="Precio" type="number" />
            <MDBInput label="Cantidad" type="number" />
            <MDBInput type="textarea" label="Descripción Producto" rows="5" />
            <select className="browser-default custom-select mb-4">
                <option>Elige tipo de producto</option>
                <option value="1">Alimentos</option>
                <option value="2">Accesorios</option>
                <option value="3">Farmacia</option>
            </select>
            <select className="browser-default custom-select mb-4">
                <option>Elige Mascota</option>
                <option value="1">Perro</option>
                <option value="2">Gato</option>
            </select>

            <Button className="bnt-form-product" size="lg" block>
                Agregar Producto
            </Button>
        </form>
    );
}

export default FormProducto;