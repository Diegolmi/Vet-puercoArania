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
                <MDBListGroupItem>Rol: Admin</MDBListGroupItem>
                <MDBListGroupItem>Pais: Argentina</MDBListGroupItem>
                <MDBListGroupItem>Provincia: Tucuman</MDBListGroupItem>
                <MDBListGroupItem>Telefono: 3816285778</MDBListGroupItem>
                
                
            </MDBListGroup>
        </MDBContainer>
     );
}
 
export default MostrarDatosAdmin;