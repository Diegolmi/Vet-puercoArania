import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Nav from '../Navbar/Nav';
// import "./style.css";

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
        color: theme.palette.common.white
    },
    title: {
        flexGrow: 1,
    },
    shadow: {
        flexGrow: 1,
        boxShadow: 'none',
        border: '0px',
        borderColor: 'secondary',
        color: theme.palette.common.white,
        textTransform: 'none'

    },
    botones: {
        flexGrow: 1,
        [theme.breakpoints.up('xs')]: {
          color:theme.palette.common.black 
        }
    },

    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${130}px)`,
            marginLeft: 130
        }
    },

    offset: theme.mixins.toolbar,
}

))

export const Navbar = (props) => {
    const classes = useStyles()
    return (
        <div >
            <AppBar  className={classes.AppBar}>
                <Toolbar className="navBread">
                    <IconButton
                        className={classes.menuButton}
                        aria-label="menu"
                        onClick={() => props.accionAbrir()}
                    >
                        <MenuIcon className="but"
                        />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    </Typography>
                    <div className={classes.botones}>
                        <Button href="#text-buttons" className="but" >Alimentos</Button>
                        <Button href="#text-buttons" className="but">Accesorios</Button>
                        <Button href="#text-buttons" className="but">Farmacia</Button>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}> </div>
        </div>
    )
}

export default Navbar;
