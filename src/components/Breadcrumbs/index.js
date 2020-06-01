import React from "react";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";
import SidebarEcommerce from '../SidebarE-commerce/index';

//styles
import './style.css'

const BreadcrumbPage = props => {
  return (
    <MDBContainer>
      <MDBBreadcrumb className="breadcrumb-ecommerce" color="indigo darken-4">
        <MDBBreadcrumbItem appendIcon icon="angle-right">Home</MDBBreadcrumbItem>
        <MDBBreadcrumbItem appendIcon icon="angle-right">Library</MDBBreadcrumbItem>
        <MDBBreadcrumbItem appendIcon>Data</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <SidebarEcommerce />
    </MDBContainer>
  );
};

export default BreadcrumbPage;