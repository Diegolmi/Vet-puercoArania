import React from 'react';


import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/about';



//importar react router 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About/about';
import Error404 from './components/Errors/Error404';
import Landing from './Landing';
import SecServicios from './components/SecServicios/index'

function App() {
  return (

    <div className="App">
      <>
          <About/>
      </>
    </div>


    <Router>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/servicios" component={SecServicios} />

        <Route path="*" component={Error404} />
      </Switch>
    </Router>
    
    
    

  );

    // <SideNavPage />
    // <SimpleBreadcrumbs />
    

}
 
export default App;
