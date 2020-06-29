import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormCarrito from './FormCarrito';
import NavbarAdmin from '../Admin/NavbarAdmin';
import Review from './Review';
import AddProduct from './AddProduct';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));



export default function Carrito() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true)
  const steps = getSteps();


  //---------------------------------------------------------------------------
  function getSteps() {
    return ['Datos de Usuario', 'Productos', 'Finalizar Compra'];
  }
  
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return  <FormCarrito onFormChange={(isValid) =>{setIsDisabled(!isValid)}} />;
      case 1:
        return <AddProduct />;
      case 2:
        return <Review />;
      default:
        return ;
    }
  }
  //---------------------------------------------------------------------------
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <NavbarAdmin />
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>Su Compra fue Exitosa!!</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div className="button-position">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" className="my-5"  color="primary" onClick={handleNext} disabled={isDisabled}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}