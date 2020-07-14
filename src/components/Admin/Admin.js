import React, { useState } from "react";
import NavbarAdmin from "./NavbarAdmin";
import FooterAdmin from "./FooterAdmin";
import SidebarAdmin from "./SidebarAdmin";
import SidebarIcons from "./SidebarIcons";

// IMPORT PAGES
import EditUser from "./Pages/usuarios/EditUser";
import AddProduct from "./Pages/productos/AddProduct";
import EditarTurnos from "./Pages/turnos/EditarTurnos";
import AdminConsultas from "./Pages/consultas/AdminConsultas";
import DatosAdmin from "./Pages/datos admin/DatosAdmin";
import InicioAdmin from "./Pages/inicio/InicioAdmin";
import { Switch, Route } from "react-router-dom";

// IMPORT COMPONENT LIBRERIAS Y CSS
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Admin.css";
import Unauthorized from "../../Unauthorized/Unauthorized";

const Admin = ({ user }) => {
  const [sidebar, setSidebar] = useState(false);
  const [cambiarBoton, setCambiarBoton] = useState(false);
  const [users, setUsers] = useState([]);

  if (user.role !== "admin") {
    return <Unauthorized />;
  }

  const hideSidebar = () => {
    setSidebar(true);
    setCambiarBoton(true);
  };

  const showSidebar = () => {
    setSidebar(false);
    setCambiarBoton(false);
  };

  return (
    <>
      <NavbarAdmin
        hideSidebar={hideSidebar}
        showSidebar={showSidebar}
        cambiarBoton={cambiarBoton}
      />
      <div className="contenedor-admin" fluid>
        {sidebar ? (
          <>
          <div className="columna-sidebar-icon">
              <SidebarIcons />
            </div>
            <div className="container-sidebar">
            <div className="container-links-sidebar">
              <Switch>
                <Route exact path="/admin" component={InicioAdmin} />
                <Route exact path="/admin/user" component={EditUser} />
                <Route exact path="/admin/producto" component={AddProduct} />
                <Route exact path="/admin/turnos" component={EditarTurnos} />
                {/* <Route
                  exact
                  path="/admin/consultas"
                  component={AdminConsultas}
                /> */}
                <Route exact path="/admin/datosAdmin" component={DatosAdmin} />
              </Switch>
            </div>
          </div>
          </>
        ) : (
          <>
          <div className="columna-sidebar">
              <SidebarAdmin />
            </div>
            <div className="container-sidebar">
            <div className="container-links-sidebar">
              <Switch>
                <Route exact path="/admin" component={InicioAdmin} />
                <Route exact path="/admin/user" component={EditUser} />
                <Route exact path="/admin/producto" component={AddProduct} />
                <Route exact path="/admin/turnos" component={EditarTurnos} />
                {/* <Route
                  exact
                  path="/admin/consultas"
                  component={AdminConsultas}
                /> */}
                <Route exact path="/admin/datosAdmin" component={DatosAdmin} />
              </Switch>
            </div>
          </div>
          </>
        )}
      </div>
      <div sm className="footer-admin">
        <FooterAdmin />
      </div>
    </>
  );
};

export default Admin;
