import React from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';

//importar react router 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About/about';
import Error404 from './components/Errors/Error404';
import Landing from './Landing';
import Register from './components/Register/Register';
import Admin from './components/Admin/Admin';


function App() {
  return (

    <Router>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/registro" component={Register} />
        <Route exact path="/about" component={About} />
        <Route exact path="/privado/admin" component={Admin} />
        {/* <Route exact path="/tienda" component={Tienda} />
        <Route exact path="/tienda/alimentos" component={Alimentos} />
        <Route exact path="/tienda/accesorios" component={Accesorios} />
        <Route exact path="/tienda/farmacia" component={Farmacia} /> */}
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
    
    
    
  );

    // <SideNavPage />
    // <SimpleBreadcrumbs />
    

}

export default App;
