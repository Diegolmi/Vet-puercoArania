import React, { useState, useEffect } from "react";
import axiosInstance from "../util/axiosInstance";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import "./payment.css";

const Success = () => {
  //cuando sea exitoso el pago, actualizar stock
  const [paymentData, setPaymentData] = useState();
  const [loading, setLoading] = useState(true);

  const verifyPayment = async () => {
    try {
      const querystring = window.location.search;
      const params = new URLSearchParams(querystring);
      const response = await axiosInstance.post("/checkout/confirm", {
        collection_id: params.get("collection_id"),
      });

      setPaymentData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  if (loading) return "loading....";
  if (paymentData.status !== "approved") {
    return "ERROR: la informacion de pago no es correcta.";
  }
  return (
    <div className="container-success">
      <div className="container-icon-success">
        <FaCheck className="succ-icon" />
      </div>
      <div className="container-info-success">
        <h1>Su pago fue exitoso</h1>
      </div>
      <div className="container-link-success">
        <Link to="/">Volver a la Pagina Principal</Link>
      </div>
      {/* {paymentData && JSON.stringify(paymentData.status)} */}
    </div>
  );
};

export default Success;
