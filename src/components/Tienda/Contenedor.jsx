import React from 'react';
import { makeStyles, Hidden } from '@material-ui/core';
import Nav from '../Navbar/Nav';
import NavbarE from '../Breadcrumbs/NavbarE';
import "../Breadcrumbs/style.css";
import { Cajon } from './Cajon';
import Accesorios from '../AccesoriosEC/Accesorios';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../Breadcrumbs/temaConfig';
import Farmacia from '../Farmacia/farmacia';

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
            <div className="navbarPri">
            </div>
            <ThemeProvider theme={theme}>
                <div className={classes.root}>
                    <div className="navbarSec">
                        <NavbarE accionAbrir={accionAbrir} />
                    </div>
                    <div className="navBread">
                        <div className={classes.toolbar}></div>
                    </div>
                    <Hidden xsDown>
                        <Cajon
                            variant="permanent"
                            open={true}
                        />
                    </Hidden>
                    <Hidden smUp>
                        <Cajon
                            variant="temporaly"
                            open={abrir}
                            onClose={accionAbrir}
                        />
                    </Hidden>
                    <div className={classes.content}>
                        <div className={classes.toolbar}>
                        </div>
                    </div>
                    <div className="productos">
                        <Accesorios />
                        <Farmacia />
                    </div>
                </div>
            </ThemeProvider>
        </>
    )
};
export default Contenedor;


