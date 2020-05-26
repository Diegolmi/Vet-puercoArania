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
import SimpleBreadcrumbs from './components/Breadcrumbs';

function App() {
  return (
    // <SideNavPage />
    <SimpleBreadcrumbs />
    );
}

export default App;
