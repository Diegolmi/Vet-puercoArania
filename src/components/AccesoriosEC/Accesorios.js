import React from 'react';
import { MDBIcon } from 'mdbreact';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../components/AccesoriosEC/style.css'




const Accesorios = () => {
    return ( 
        <div className="todo">
        <Card id="card_acc">
          <Card.Img className="img_acc" variant="top" src="https://www.infobae.com/new-resizer/7J1NiRUuGPHRbAvpplVH6RkL9GU=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/04/10115623/iStock-479955586.jpg" />
          <Card.Body>
            <Card.Title>Accesorio 1</Card.Title>
            <Card.Text>$399,99</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button size="sm" className="btn button-card"><MDBIcon className="icon-card" icon="shopping-bag" /></Button>
            <Button size="sm" className="btn button-card"><MDBIcon className="icon-card" icon="shopping-cart" /></Button>
          </Card.Footer>
        </Card>
        <Card id="card_acc">
          <Card.Img className="img_acc" variant="top" src="https://www.infobae.com/new-resizer/7J1NiRUuGPHRbAvpplVH6RkL9GU=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/04/10115623/iStock-479955586.jpg" />
          <Card.Body>
            <Card.Title>Accesorio 1</Card.Title>
            <Card.Text>$399,99</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button size="sm" className="btn button-card"><MDBIcon className="icon-card" icon="shopping-bag" /></Button>
            <Button size="sm" className="btn button-card"><MDBIcon className="icon-card" icon="shopping-cart" /></Button>
          </Card.Footer>
        </Card>
        
    </div>

     );
}
 
export default Accesorios;