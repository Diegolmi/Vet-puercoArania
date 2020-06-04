import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";


const MostrarDatosAdmin = () => {
    return ( 
        <MDBContainer>
            <MDBListGroup style={{ width: "22rem" }}>
                <MDBListGroupItem>Nombre: Martin</MDBListGroupItem>
                <MDBListGroupItem>Apellido: Jerez</MDBListGroupItem>
                <MDBListGroupItem>E-mail: martincho111986@gmail.com</MDBListGroupItem>
                <MDBListGroupItem>Domicilio: lkajsdlkjads</MDBListGroupItem>
                <MDBListGroupItem>Ocupacion: Admin</MDBListGroupItem>
                
            </MDBListGroup>
        </MDBContainer>
     );
}
 
export default MostrarDatosAdmin;