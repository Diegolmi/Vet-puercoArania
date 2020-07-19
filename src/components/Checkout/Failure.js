import React from "react";
import { Link } from "react-router-dom";
import "./payment.css";
import { MdSmsFailed } from "react-icons/md";

const Failure = () => {
  return (
    <div className="container-failure">
      <div className="failure">
        <MdSmsFailed className="fail-icon" />
        <h1>Su pago fue rechazado</h1>
        <Link to="/">Volver a inicio</Link>
      </div>
    </div>
  );
};

export default Failure;
