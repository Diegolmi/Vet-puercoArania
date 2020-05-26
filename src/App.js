import React from 'react';


import SideNavPage from './components/SidebarE-commerce';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
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


// import About from './components/About/about';
import EcommerceHome from './components/EcommerceHome/EcommerceHome';
// import logo from '../src/assets/img/logo.png'
// import Registro from './components/registro'

import './App.css';
import SimpleBreadcrumbs from './components/Breadcrumbs';

function App() {
  return (

    <div className="container-fluid">

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

    // <SideNavPage />
    <SimpleBreadcrumbs />
    );

}

export default App;
