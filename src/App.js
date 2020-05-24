import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../src/assets/img/logo.png'
import Registro from './components/registro'
import Nav from '../src/components/Nav'


import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/about';
import EcommerceHome from './components/EcommerceHome/EcommerceHome';
// import logo from '../src/assets/img/logo.png'
// import Registro from './components/registro'
import './App.css';
import 'mdbreact/dist/css/mdb.css';
import Servicios from './components/Servicios/Servicios';




function App() {
  return (
    <div className="App">

      <header className="App-header">

        <Nav />
        <img
              className="img-fluid"
              src={logo} alt=""
            />
        
      </header>
      <section>
     <Registro />
      </section>

    
      
      <Footer/>

      <>
          <About/>
      </>


    </div>
    
    
  );
}

export default App;
