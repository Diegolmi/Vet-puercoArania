import React from "react";
import { MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import "../Admin.css";

const AdminCardSection = () => {
  return (
    <div className=" container-card-info">

        <MDBCard color="primary-color" className="classic-admin-card">
          <MDBCardBody>
            <div className="float-right">
              <MDBIcon far icon="money-bill-alt" />
            </div>
            <p className="white-text">VENTAS</p>
            <h4>
              <strong>$2000</strong>
            </h4>
          </MDBCardBody>
          <div className="progress">
            <div
              aria-valuemax="100"
              aria-valuemin="0"
              aria-valuenow="25"
              className="progress-bar bg grey darken-3"
              role="progressbar"
              style={{ width: "25%" }}
            ></div>
          </div>
          <MDBCardBody>
            <p>Better than last week (25%)</p>
          </MDBCardBody>
        </MDBCard>
      
        <MDBCard color="warning-color" className="classic-admin-card">
          <MDBCardBody>
            <div className="float-right">
              <MDBIcon icon="chart-line" />
            </div>
            <p className="white-text">REGISTROS</p>
            <h4>
              <strong>200</strong>
            </h4>
          </MDBCardBody>
          <div className="progress">
            <div
              aria-valuemax="100"
              aria-valuemin="0"
              aria-valuenow="25"
              className="progress-bar bg grey darken-3"
              role="progressbar"
              style={{ width: "25%" }}
            ></div>
          </div>
          <MDBCardBody>
            <p>Worse than last week (25%)</p>
          </MDBCardBody>
        </MDBCard>
     
        <MDBCard color="primary-color" className="classic-admin-card">
          <MDBCardBody>
            <div className="float-right">
              <MDBIcon icon="chart-pie" />
            </div>
            <p className="white-text">TURNOS</p>
            <h4>
              <strong>20000</strong>
            </h4>
          </MDBCardBody>
          <div className="progress">
            <div
              aria-valuemax="100"
              aria-valuemin="0"
              aria-valuenow="75"
              className="progress-bar bg grey darken-3"
              role="progressbar"
              style={{ width: "75%" }}
            ></div>
          </div>
          <MDBCardBody>
            <p>Better than last week (75%)</p>
          </MDBCardBody>
        </MDBCard>
    </div>
  );
};

export default AdminCardSection;
