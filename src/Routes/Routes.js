import React from 'react';

// importar react router 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import About from '../components/About/about';
import Error404 from '../components/Errors/Error404';
import Landing from '../Landing';
import Register from '../components/Register/Register';
import Login from '../components/Navbar/Login';
import Admin from '../components/Admin/Admin';
import SecServicios from '../components/SecServicios/index';
import Accesorios from '../components/AccesoriosEC/Accesorios';
import Alimentos from '../components/Alimentos/alimentos';
import Contenedor from '../components/Tienda/Contenedor';
import Carrito from '../components/stepper/Carrito';
import AdminUser from '../components/Usser/AdminUser';
import PrivateRoute from './PrivateRoute';
import Success from '../components/Checkout/Success';
import Pending from '../components/Checkout/Pending';
import Failure from '../components/Checkout/Failure';

// import AdminRoute from './AdminRoute';



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
        <Route exact path="/tienda/accesorios" component={Accesorios}/>
        <Route exact path="/tienda/alimentos" component={Alimentos} />
        <PrivateRoute exact path="/privado/carrito" component={Carrito} />
        <PrivateRoute  path="/privado/admin" component={Admin} />
        <PrivateRoute path="/privado/usuario" component={AdminUser} />
        <PrivateRoute path="/payment-success" component={Success} />
        <PrivateRoute path="/payment-pending" component={Pending} />
        <PrivateRoute path="/payment-failure" component={Failure} />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
    

}
 

export default Routes;