import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import "./style.css";

const useStyles = makeStyles(theme => ({
    menuButton:{
        marginRight:theme.spacing(2),
        color:theme.palette.common.white
    },
    title:{
        flexGrow:1,
    },
    shadow:{
        flexGrow:1,
        boxShadow:'none',
        border:'0px',
        borderColor:'secondary',
        color:theme.palette.common.white,
        textTransform: 'none'
    },
    botones:{
        flexGrow:1
    }    
}

))

export const Navbar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar position="relative" className="navBread">
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        aria-label="menu"
                    >
                        <MenuIcon
                        />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    </Typography>
                    <div className={classes.botones}>
                        <Button variant="text" className={classes.shadow}>Alimentos</Button>
                        <Button variant="text" className={classes.shadow}>Accesorios</Button>
                        <Button variant="text" className={classes.shadow}>Farmacia</Button>
                     </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
