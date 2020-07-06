import React from "react";
import "../../Admin.css";
import SaludoAlert from "../../Components/SaludoAlert";
import AdminCardSection from "../../Components/AdminCardSection";
import ChartSection1 from "../../Components/ChartSection1";

const InicioAdmin = () => {
  return (
    <div className="container-inicio-admin">
      <div className="saludo-inicio">
        <SaludoAlert />
      </div>

      <div className="admin-pages">
        <AdminCardSection />
        <ChartSection1 />
      </div>
    </div>
  );
};

export default InicioAdmin;
