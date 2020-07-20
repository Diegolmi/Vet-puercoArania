import React from 'react';

import { makeStyles, Drawer, Divider } from '@material-ui/core';
import RadioButtonsGroup from '../SidebarE-commerce/index';

const estilos = makeStyles((theme) => ({
<<<<<<< HEAD
   drawer: {
        width: 100,

        flexShrink:0
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {

        width: 150,

      },
=======
        drawer: {
                width: 100,

                flexShrink: 0
        },
        toolbar: theme.mixins.toolbar,
        drawerPaper: {

                width: 150,

        },
>>>>>>> 4de8003f8c0e181d261780caa69c1fdb5a3b6084
}));

export const Cajon = (props) => {
        const classes = estilos()
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
                        <Divider />
                        <RadioButtonsGroup />
                </Drawer>
        )
}
