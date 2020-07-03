import React from 'react';
import { makeStyles, Hidden } from '@material-ui/core';
import Nav from '../Navbar/Nav';

import "../Breadcrumbs/style.css";
import { Cajon } from './Cajon';
import Accesorios from '../AccesoriosEC/Accesorios';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../Breadcrumbs/temaConfig';
import Carousel from './CarouselTienda';
import './Tienda.css';
import Card from './Card';


const estilos = makeStyles((theme) => ({
    root: {
        display: 'flex',

    },
    toolbar: theme.mixins.toolbar
}));

const Contenedor = () => {

    const classes = estilos()
    const [abrir, setAbrir] = React.useState(false)
    const accionAbrir = () => {
        setAbrir(!abrir)
    }

    return (
        <>
           <Nav/>
        
            <ThemeProvider theme={theme}>
                <div className={classes.root}>

                    <Hidden xsDown>
                        <Cajon
                            variant="permanent"
                            open={true}
                        />
                    </Hidden>
                    <Hidden smUp>
                        <Cajon
                            variant="temporary"
                            open={abrir}
                            onClose={accionAbrir}
                        />
                    </Hidden>
                    <div className={classes.content}>
                        <div className={classes.toolbar}>
                        </div>
                    </div>
                    <div className="productos">
                        <Carousel />
                        <Accesorios />
                        <Card/>
                        </div>
                        
                    

                </div>
            </ThemeProvider>
        </>
    )
};
export default Contenedor;


