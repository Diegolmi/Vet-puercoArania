import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './CardEcommerce.css';
// import img3 from '../../assets/img/overlay-tienda.png';


class Overlay extends React.Component {
    render() {
        return (
            <MDBContainer className="mb-4 contenedor-overlay">
                {/* <MDBRow>  */}
                    <MDBCol md="4">
                        <MDBView hover>
                            <img
                                src={'https://i.ibb.co/1zjHy82/overlay-tienda1.png'}
                                // className="img-fluid"
                                alt=""
                            />
                            <MDBMask className="flex-center" overlay="red-light">
                                <p className="white-text">Visita Nuestra Tienda Online</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>       
                {/* </MDBRow> */}
            </MDBContainer>
        );
    }
}

export default Overlay;