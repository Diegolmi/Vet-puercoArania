import React from "react";
import "../../Admin.css";
import SaludoAlert from "../../Components/SaludoAlert";
import AdminCardSection from "../../Components/AdminCardSection";
import ChartSection1 from "../../Components/ChartSection1";

const InicioAdmin = () => {
  return (
    <div className="container-inicio-admin">
        <SaludoAlert />

        <AdminCardSection />
        <ChartSection1 />
    </div>
  );
};

export default InicioAdmin;
