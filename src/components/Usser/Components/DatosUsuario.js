import React from 'react';
import { Tabs, Tab, Card, ListGroup } from 'react-bootstrap';
import ModificarDatos from './ModificarDatos';

const DatosUsuario = () => {

  // const datos = {
  //   nombre: [],
  //   apellido: [],
  //   domicilio: [],
  //   telefono: [],
  //   email: [],
  // }



  return (
    <div>
      <Tabs defaultActiveKey="datos" id="uncontrolled-tab-example">
        <Tab eventKey="datos" title="Datos Personales">
          <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush">
              <ListGroup.Item>Nombre:</ListGroup.Item>
              <ListGroup.Item>Apellido:</ListGroup.Item>
              <ListGroup.Item>Domicilio:</ListGroup.Item>
              <ListGroup.Item>Telefono:</ListGroup.Item>
              <ListGroup.Item>E-mail</ListGroup.Item>

            </ListGroup>
          </Card>

        </Tab>
        <Tab eventKey="modificar" title="Modificar Datos">
          <h2>Cambiar Datos de cuenta</h2>
          <ModificarDatos />
        </Tab>

      </Tabs>
    </div>
  )
}

export default DatosUsuario;
