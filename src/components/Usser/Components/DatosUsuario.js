import React, { useState, useEffect } from 'react'
import { Tabs, Tab, Card, ListGroup } from 'react-bootstrap';
import ModificarDatos from './ModificarDatos';
import axiosInstance from '../../util/axiosInstance';

const DatosUsuario = () => {
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    const fetchUsuario = async () => {
      const response = await axiosInstance.get(`/private/userlogged`);
      setUsuario(response.data);
    };
    fetchUsuario();
  }, []);

  const {
    username,
    name,
    lastname,
    address,
    tel,
    email
  } = usuario;

  return (
    <div>
      <Tabs defaultActiveKey="datos" id="uncontrolled-tab-example">
        <Tab eventKey="datos" title="Datos Personales">
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>Nombre de usuario: {username} </ListGroup.Item>
              <ListGroup.Item>Nombre: {name} </ListGroup.Item>
              <ListGroup.Item>Apellido: {lastname} </ListGroup.Item>
              <ListGroup.Item>Domicilio: {address} </ListGroup.Item>
              <ListGroup.Item>Telefono: {tel} </ListGroup.Item>
              <ListGroup.Item>E-mail: {email} </ListGroup.Item>
            </ListGroup>
          </Card>
        </Tab>
        <Tab eventKey="modificar" title="Modificar Datos">
          <h2>Cambiar Datos de cuenta</h2>
          <ModificarDatos />
        </Tab>
      </Tabs>
    </div>
  );
};

export default DatosUsuario;
