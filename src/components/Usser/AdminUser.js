import React, { useState } from "react";
import NavbarUser from "./Components/NavbarUser";
import FooterAdmin from "../Admin/FooterAdmin";
import Sidenav from "./Components/Sidenav";
import SideNavicons from "./Components/sideNavicons";

import IndexUsser from "./IndexUsser";
import Turnos from "./Components/Turnos/Turnos";
import DatosUsuario from "./Components/DatosUsuario";
import { Switch, Route } from "react-router-dom";
import "./Components/styleMascotas.css";

const AdminUser = () => {
  const [sidebar, setSidebar] = useState(false);
  const [cambiarBoton, setCambiarBoton] = useState(false);

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
      <NavbarUser
        hideSidebar={hideSidebar}
        showSidebar={showSidebar}
        cambiarBoton={cambiarBoton}
      />
      <div className="contenedor-admin">
        {sidebar ? (
          <>
            <div className="columna-sidebar-icon">
              <SideNavicons />
            </div>
            <div className="container-sidebar1">
              <div className="container-links-sidebar1">
                <Switch>
                  <Route exact path="/usuario" component={IndexUsser} />
                  <Route exact path="/usuario/turnos" component={Turnos} />
                  <Route exact path="/usuario/datos" component={DatosUsuario} />
                </Switch>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="columna-sidebar">
              <Sidenav />
            </div>
            <div className="container-sidebar1">
              <div className="container-links-sidebar1">
                <Switch>
                  <Route exact path="/usuario" component={IndexUsser} />
                  <Route exact path="/usuario/turnos" component={Turnos} />
                  <Route exact path="/usuario/datos" component={DatosUsuario} />
                </Switch>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="footer-admin">
        <FooterAdmin />
      </div>
    </>
  );
};

export default AdminUser;
