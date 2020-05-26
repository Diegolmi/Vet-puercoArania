import React from 'react';


import SideNavPage from './components/SidebarE-commerce';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Navbar from './components/Navbar/Nav'
import Footer from './components/Footer/Footer';
import EcommerceHome from './components/EcommerceHome/EcommerceHome';
import Servicios from './components/Servicios/Servicios';
import Carousel from './components/Carousel';
import EcommerceHome from './components/EcommerceHome/EcommerceHome';
import './App.css';
import SimpleBreadcrumbs from './components/Breadcrumbs';

//importar react router 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About/about';
import Error404 from './components/Errors/Error404';
import Landing from './Landing';


function App() {
  return (

    <Router>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
    </div>
    
    
  );

    // <SideNavPage />
    <SimpleBreadcrumbs />
    );

}

export default App;
