import React, { useState } from "react";
import { MDBContainer, MDBRating } from "mdbreact";
import "./CardEcommerce.css";

const RatingPage = () => {
  const [basic] = useState([
    {
      tooltip: "Very Bad",
    },
    {
      tooltip: "Poor",
    },
    {
      tooltip: "Ok",
      choosed: false,
    },
    {
      tooltip: "Good",
    },
    {
      tooltip: "Excellent",
    },
  ]);

  return (
    <MDBContainer className="rating-container">
      <MDBRating data={basic} />
    </MDBContainer>
  );
};

export default RatingPage;
