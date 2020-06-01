import React from 'react';
import SideNavPage from './components/SidebarE-commerce';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import CarouselPage from './components/Carousel/index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from './components/Navbar/Nav'
import Footer from './components/Footer/Footer';
// import About from './components/About/about';
import EcommerceHome from './components/EcommerceHome/EcommerceHome';
// import logo from '../src/assets/img/logo.png'
// import Registro from './components/registro'
import './App.css';
import FormPage from './components/FormServicios';
import About from './components/About/about';
import SimpleBreadcrumbs from './components/Breadcrumbs';

//importar react router 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import About from './components/About/about';
import Error404 from './components/Errors/Error404';
import Landing from './Landing';
import SecServicios from './components/SecServicios/index'

function App() {
  return (
   <div className="App">
    // <SideNavPage />
    
    



    <div>
      <SimpleBreadcrumbs />
      <FormPage />
    </div>



    
      
          <About/>
      
    


    <Router>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/servicios" component={SecServicios} />

        <Route path="*" component={Error404} />
      </Switch>
    </Router>
    
    
    

  

    // <SideNavPage />
    // <SimpleBreadcrumbs />
    </div>
    
    );

}
 
export default App;
