import React from 'react';

import { makeStyles,Drawer, Divider } from '@material-ui/core';
import RadioButtonsGroup from '../SidebarE-commerce/index';

const estilos = makeStyles((theme) => ({
   drawer: {
        width: 100,

        flexShrink:0
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {

        width: 150,

      },
}));

export const Cajon = (props) => {
    const classes=estilos()
    return (
       <Drawer 
       className={classes.drawer}
       classes={{
         paper: classes.drawerPaper,
        }}
        anchor="left"
        variant={props.variant}
        open={props.open}
        onClose={props.onClose ? props.onClose : null}
       >
        <div className={classes.toolbar}></div>
        <Divider/>
        <RadioButtonsGroup/>
       </Drawer>
    )
}
