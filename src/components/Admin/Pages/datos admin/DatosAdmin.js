import React, { useState, useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../../Admin.css";

import FormDatosAdmin from "./FormDatosAdmin";
import MostrarDatosAdmin from "./MostrarDatosAdmin";
// import FormCreateAdmin from "./FormCreateAdmin";
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

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
        [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async () => {
    // e.preventDefault()
     await axiosInstance.put('/private/user', usuario)
  }

  return (
    <div className="container-datos-admin">
      <div className="row">
        <div className="col-10 my-3">
          <Tabs defaultActiveKey="datos" id="uncontrolled-tab-example">
            <Tab eventKey="datos" title="Datos Admin">
              <h2 className="my-4">Datos del Admin</h2>
              <MostrarDatosAdmin usuario={usuario} />
            </Tab>
            <Tab eventKey="modificar" title="Modificar Datos">
              <h2 className="my-4">Cambiar Datos de cuenta</h2>
              <FormDatosAdmin usuario={usuario} handleChange={handleChange} handleSubmit={handleSubmit}/>
            </Tab>
            {/* <Tab eventKey="crear" title="Crear Cuenta Admin">
            <h2 className="my-4">Crear Usuario Admin</h2>
              <FormCreateAdmin />
            </Tab> */}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DatosAdmin;
