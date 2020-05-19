import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../src/assets/img/logo.png'
import Registro from './components/registro'
import Nav from '../src/components/Nav'

import './App.css';

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
    </div>
  );
}

export default App;
