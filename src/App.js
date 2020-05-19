import React from 'react';
import CarouselPage from './components/Carousel/index';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import EcommerceHome from './components/EcommerceHome/EcommerceHome';


import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../src/assets/img/logo.png'
import Registro from './components/registro'
import Nav from '../src/components/Nav'


import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/about';





//Styles mdBootstrap
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


function App() {
  return (

   

    <div className="App">
      <CarouselPage />

      <header className="App-header">

        <Nav />
        <img
              className="img-fluid"
              src={logo} alt=""
            />
        
      </header>
      <section>
      <EcommerceHome />
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
