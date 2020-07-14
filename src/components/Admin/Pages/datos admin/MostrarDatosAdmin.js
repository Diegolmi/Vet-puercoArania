import React from "react";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

const MostrarDatosAdmin = ({ usuario }) => {
  const {
    username,
    name,
    lastname,
    role,
    email,
    address,
    country,
    province,
    tel,
  } = usuario;
  return (
    <MDBContainer>
      <MDBListGroup style={{ width: "22rem" }}>
        <MDBListGroupItem>Usuario: {username}</MDBListGroupItem>
        <MDBListGroupItem>Nombre: {name}</MDBListGroupItem>
        <MDBListGroupItem>Apellido: {lastname}</MDBListGroupItem>
        <MDBListGroupItem>E-mail: {email}</MDBListGroupItem>
        <MDBListGroupItem>Domicilio: {address}</MDBListGroupItem>
        <MDBListGroupItem>Pais: {country}</MDBListGroupItem>
        <MDBListGroupItem>Provincia: {province}</MDBListGroupItem>
        <MDBListGroupItem>Telefono: {tel}</MDBListGroupItem>
        <MDBListGroupItem>Rol: {role}</MDBListGroupItem>
      </MDBListGroup>
    </MDBContainer>
  );
};

export default MostrarDatosAdmin;
