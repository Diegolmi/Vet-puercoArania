import React from "react";
import Cards from "./CardsAlimento";
/*style*/
import "../../components/Alimentos/style.css";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { Grid } from "@material-ui/core";
import FooterImg from "./footer";

const Alimentos = () => {
  return (
    <div className="gaby">
      <div className="bg d-flex align-self-md-end">
        <h4 id="titulo_acce">Alimentos</h4>
      </div>
      <div className="d-flex align-items-center">
        <div className="todo">
          <Grid className="sidenav-filters">
            <FormControl component="fieldset">
              <FormLabel component="legend">Tipo de animal:</FormLabel>
              <RadioGroup
                aria-label="type"
                name="animal-type"
                className="grupo"
              >
                <FormControlLabel value="dog" control={<Radio />} label="Dog" />
                <FormControlLabel
                  value="cats"
                  control={<Radio />}
                  label="Cats"
                />
              </RadioGroup>
              <FormLabel component="legend">Tamaño:</FormLabel>
              <FormGroup className="grupo">
                <FormControlLabel control={<Checkbox />} label="Chico" />
                <FormControlLabel control={<Checkbox />} label="Mediano" />
                <FormControlLabel control={<Checkbox />} label="Grande" />
              </FormGroup>
            </FormControl>
          </Grid>
        </div>
        <Cards />
      </div>
      <FooterImg />
    </div>
  );
};

export default Alimentos;
