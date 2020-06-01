import React from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";

const BreadCrumbsServicios = () => {
    return (
        <MDBContainer>
            <MDBBreadcrumb color="cyan lighten-4">
                <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
                <MDBBreadcrumbItem>Library</MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>Data</MDBBreadcrumbItem>
            </MDBBreadcrumb>
        </MDBContainer>
    );
}

export default BreadCrumbsServicios;