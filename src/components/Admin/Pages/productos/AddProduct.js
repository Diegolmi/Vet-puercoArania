import React from 'react';
import ProductsTable from '../../Components/ProductsTable';


import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import FormProducto from '../../Components/FormProducto';


const AddProduct = () => {

    return (
        <div className="container-productos-admin my-3">
            <div className="row">
                <div className="col-10">
                    <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                        <Tab eventKey="home" title="Agregar Producto">
                            <FormProducto />
                        </Tab>
                        <Tab eventKey="profile" title="Lista Productos">
                            <ProductsTable />
                        </Tab>
                    </Tabs>
                </div>


            </div>

        </div>
    );
}

export default AddProduct;