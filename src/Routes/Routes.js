import React from "react";

// importar react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "../components/About/about";
import Error404 from "../components/Errors/Error404";
import Landing from "../Landing";
import Register from "../components/Register/Register";
import Login from "../components/Navbar/Login";
import Admin from "../components/Admin/Admin";
import SecServicios from "../components/SecServicios/index";
import Contenedor from "../components/Tienda/Contenedor";
import Carrito from "../components/stepper/Carrito";
import AdminUser from "../components/Usser/AdminUser";
import PrivateRoute from "./PrivateRoute";
import Success from "../components/Checkout/Success";
import Pending from "../components/Checkout/Pending";
import Failure from "../components/Checkout/Failure";
import RecuperarCuenta from "../components/RecuperarCuenta/recuperarCuenta";
// import RestrictedRoute from "./RestrictedRoute";



function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/servicios" component={SecServicios} />
        <Route exact path="/registro" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/tienda" component={Contenedor} />
        <PrivateRoute path="/admin" component={Admin} />
        <PrivateRoute path="/usuario" component={AdminUser} />
        <PrivateRoute path="/carrito" component={Carrito} />
        <PrivateRoute path="/payment-success" component={Success} />
        <PrivateRoute path="/payment-pending" component={Pending} />
        <PrivateRoute path="/payment-failure" component={Failure} />
        <Route exact path="/recuperarCuenta" component={RecuperarCuenta} />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
}

export default Routes;
