import React from 'react';
import CarouselPage from './components/Carousel/index';
import './App.css';

//Styles mdBootstrap
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


function App() {
  return (
    <div className="App">
      <CarouselPage />
    </div>
  );
}

export default App;
