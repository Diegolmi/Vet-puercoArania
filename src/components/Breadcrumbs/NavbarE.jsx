import React from 'react';
import { AppBar, Toolbar, makeStyles, IconButton, Button, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import "./style.css";

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,

    menuButton: {
        marginRight: theme.spacing(2),

    },
    title: {
        flexGrow: 1,
        display:"flex"
    },
    shadow: {
        flexGrow: 1,
        boxShadow: 'none',
        border: '0px',
        borderColor: 'secondary',
        textTransform: 'none'

    },
    botones: {
        
        flexGrow: 1,
        textTransform:'none'
    },

    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${130}px)`,
            marginLeft: 130
        }
    },

}

))

export const Navbar = (props) => {
    const classes = useStyles()
    return (
        <>
            <AppBar className={classes.AppBar} >
                <Toolbar className="navBread">
                    <Typography className={classes.title}>
                        <IconButton
                            className={classes.menuButton}
                            aria-label="menu"
                            onClick={() => props.accionAbrir()}
                        >
                            <MenuIcon className="butIcon"
                            />
                        </IconButton>
                    </Typography>
                    <div className={classes.title}>
                        <Button href="#text-buttons" className={classes.botones} >Alimentos</Button>
                        <Button href="#text-buttons" className={classes.botones}>Accesorios</Button>
                        <Button href="#text-buttons" className={classes.botones}>Farmacia</Button>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}> </div>
        </>
    )
}

export default Navbar;
