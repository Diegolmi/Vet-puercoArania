import React, { useState, useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../../Admin.css";

import FormDatosAdmin from "./FormDatosAdmin";
import MostrarDatosAdmin from "./MostrarDatosAdmin";
import FormCreateAdmin from "./FormCreateAdmin";
import axiosInstance from "../../../util/axiosInstance";

const DatosAdmin = () => {
  const [usuario, setUsuario] = useState([]);

  const traerUsuarios = async () => {
    const response = await axiosInstance.get("/private/userlogged");
    setUsuario(response.data);
  };

  useEffect(() => {
    traerUsuarios();
  }, []);

  return (
    <div className="container-datos-admin">
      <div className="row">
        <div className="col-10 my-3">
          <Tabs defaultActiveKey="datos" id="uncontrolled-tab-example">
            <Tab eventKey="datos" title="Datos Admin">
              <MostrarDatosAdmin usuario={usuario} />
            </Tab>
            <Tab eventKey="modificar" title="Modificar Datos">
              <h2>Cambiar Datos de cuenta</h2>
              <FormDatosAdmin />
            </Tab>
            <Tab eventKey="crear" title="Crear Cuenta Admin">
              <FormCreateAdmin />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DatosAdmin;
