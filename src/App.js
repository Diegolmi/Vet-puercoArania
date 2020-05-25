import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// import Registro from './components/registro'
import Navbar from './components/Navbar/Nav'
import Footer from './components/Footer/Footer';
import './App.css';
import About from './components/About/about';
import EcommerceHome from './components/EcommerceHome/EcommerceHome';
import Servicios from './components/Servicios/Servicios';
import Carousel from './components/Carousel';
import Register from './components/Register/Register';




function App() {
  return (
    <div className="App">

      <header className="App-header">

        <Navbar />
      
        
      </header>
      <section>
        <Carousel />
        <EcommerceHome />
      <Servicios />
     {/* <Registro /> */}
      </section>

    
      
      <Footer/>

      <>
          <About/>
          <Register />

      </>


    </div>
    
    
  );
}

export default App;
