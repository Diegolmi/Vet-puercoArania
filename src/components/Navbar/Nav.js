
import './styleNav.css';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/img/logo.png';
import { MDBBadge } from "mdbreact";
import { Link } from 'react-router-dom';
import { FaCartArrowDown } from 'react-icons/fa';

import CarritoDesplegable from '../carritoDesplegable/CarritoDesplegable';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { MDBBtn } from "mdbreact";







const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const NavbarPage = () => {

    //STATE PARA EL NAVBAR ASI CAMBIA DE COLOR CUANDO SE HACE SCROLL
  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])


  //-------------------------------------------------------------
          //SIDEBAR PARA CARRITO DESDE EL NAVBAR

  const classes = useStyles();
  const [state, setState] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="contenedor-carrito-sidebar">

      <CarritoDesplegable />
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
        <MDBBtn id="btn_turno" outline color="secondary my-4"> ir al Carrito</MDBBtn>

      </List>
      <Divider />
      <List>
        {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
    </div>
  );

  //------------------------------------------------------------------

  return (

    <>
      <Navbar collapseOnSelect expand="lg" className={navBackground ? "navbar-body" : ''} fixed="top">
        <Navbar.Brand href="#home"><img src={logo} className="logo" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle-admin" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-lg-auto">
            <Link to="/" className="mr-3 link-admin">INICIO</Link>
            <Link to="/about" className="mr-3 link-admin">NOSOTROS</Link>
            <Link to="/servicios" className="mr-3 link-admin">TURNOS</Link>
            <Link to="/galeria" className="mr-3 link-admin">Galeria</Link>
            <Link to="/" className="mr-3 link-admin">TIENDA</Link>

          </Nav>
          <hr />
          <Nav>

            {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button className="link-admin link-admin-boton"
              onClick={toggleDrawer(anchor, true)}
            >
              <FaCartArrowDown className="carro"/>

              <MDBBadge color="danger" className="ml-2">4</MDBBadge>
              </button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
            


            <Link id="log_nb" className="mr-3 link-admin" to="/login">Login</Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div>
     
    </div>
    </>
  );
}


export default NavbarPage;
