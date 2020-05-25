import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

//styles
import './style.css'

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="sidenav-filters">
      <FormControl component="fieldset">
        <FormLabel component="legend">Tipo de animal: </FormLabel>
        <RadioGroup aria-label="type" name="type" value={value} onChange={handleChange}>
          <FormControlLabel value="dogs" control={<Radio />} label="Perros" />
          <FormControlLabel value="cats" control={<Radio />} label="Gatos" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Tamaño: </FormLabel>
        <RadioGroup aria-label="size" name="size" value={value} onChange={handleChange}>
          <FormControlLabel value="small" control={<Radio />} label="Chico" />
          <FormControlLabel value="medium" control={<Radio />} label="Mediano" />
          <FormControlLabel value="big" control={<Radio />} label="Grande" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}