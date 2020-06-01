import React from 'react';
import {ThemeProvider} from "@material-ui/core/styles";
import theme from"./temaConfig";
import Navbar from "./Navbar";

const Breadcrumbs=()=>{
  return(
    <>
    <ThemeProvider theme={theme}>
    <Navbar/>
        </ThemeProvider>
    </>
  );
};
export default Breadcrumbs;