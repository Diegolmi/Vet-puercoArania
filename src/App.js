import React from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import EcommerceHome from './components/EcommerceHome/EcommerceHome';


import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './components/registro'
import Nav from '../src/components/Nav'


import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/about';





function App() {
  return (

    

    <div className="App">

      <header className="App-header">
        <Nav />
      

      </header>
      <section>
      <EcommerceHome />
        <Registro />
      </section>


      <Footer />

      <>
        <About />
      </>


    </div>
    
    

  );
}

export default App;
