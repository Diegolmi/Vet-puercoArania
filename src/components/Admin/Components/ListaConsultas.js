import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';



const ListaConsultas = () => {

    
    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
  <Row>
    <Col sm={4}>
      <ListGroup>
        <ListGroup.Item action href="#link1">
          Consultas Sobre productos
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
        Consultas Sobre Alimentos
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey="#link1">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, perferendis. Itaque mollitia atque cupiditate dignissimos officia deleniti saepe libero odio repellendus eaque. Excepturi, quo voluptate voluptatum cum repellat ipsum optio?</p>

        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, perferendis. Itaque mollitia atque cupiditate dignissimos officia deleniti saepe libero odio repellendus eaque. Excepturi, quo voluptate voluptatum cum repellat ipsum optio?</p>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
 
</Tab.Container>
    );
}

export default ListaConsultas;