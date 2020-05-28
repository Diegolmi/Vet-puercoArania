import React from 'react';
import img1 from '../../assets/img/remedio1.jpg'
import './farmacia.css';
import { MDBIcon } from 'mdbreact';
import Rating from '../EcommerceHome/Rating'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import moment from 'moment';
import FarmaciaNav from './farmaciaNav';




const Farmacia = () => {

    const array = [1, 2, 3, 4];

    return (
        <>
            <FarmaciaNav/>
            <Container fluid>
                <div className="title-container">
                    {/* <h1>Farmacia</h1> */}
                </div>

                <Row>

                    {array.map(arr => (
                        <Col lg={3} md={6}>
                            <Card>
                                <Card.Img variant="top" src={img1} className="img-fluid" />
                                <Card.Body>
                                    <Card.Title>Total FLC</Card.Title>
                                    <Card.Text>$950.00</Card.Text>
                                    <Card.Text><small className="text-muted">{moment().startOf().fromNow()}</small></Card.Text>
                                    <Card.Text className="rating"><Rating /></Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button size="sm" className="btn button-card"><MDBIcon className="icon-card" icon="info" /></Button>
                                    <Button size="sm" className="btn button-card"><MDBIcon className="icon-card" icon="shopping-cart" /></Button>
                                </Card.Footer>
                            </Card>
                        </Col>

                    ))}
                </Row>
            </Container>






        </>


    );
}

export default Farmacia;