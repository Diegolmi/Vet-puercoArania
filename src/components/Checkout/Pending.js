import React, { useState, useEffect } from "react";
import axiosInstance from "../util/axiosInstance";
import { Link, useHistory } from "react-router-dom";
import "./payment.css";
import { FaSyncAlt } from "react-icons/fa";

const Pending = () => {
  //cuando sea pendiente el pago, actualizar stock
  const history = useHistory();

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
  if (paymentData.status !== "pending") {
    return "ERROR: la informacion de pago no es correcta.";
  }

  return (
    <div className="container-pending">
      <div className="pending">
        <FaSyncAlt className="pending-icon" />
        <h1>Su Pago esta Pendiente</h1>
        <Link to="/">Volver a inicio</Link>
      </div>
    </div>
  );
};

export default Pending;
