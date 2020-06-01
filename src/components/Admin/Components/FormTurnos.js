import React from 'react';
import { MDBInput, MDBCol, MDBDatePickerV5, MDBTimePicker  } from 'mdbreact';
import Button from 'react-bootstrap/Button';

const FormTurnos = ({ handleClose }) => {
    const getPickerValue = value => {
        console.log(value);
    }
    return ( 
        <form>
            <MDBCol md='12'>
            <MDBInput label="Nombre Mascota" required  />   
            </MDBCol>
            <MDBCol md='12'>
            <MDBInput label="Nombre Dueño" required/>   
            </MDBCol>
            <MDBCol md='12'>
            <MDBDatePickerV5 disablePast getValue={(e)=> console.log(e)} />  
            </MDBCol>
            <MDBCol md='12'>
            <MDBTimePicker id="timePicker" label="12hrs format"  getValue={getPickerValue} />   
            </MDBCol>
            <MDBCol md='12'>
            <MDBInput type="textarea" label="Consulta" rows="5" />  
            </MDBCol>
            <MDBCol md='12'>
            <select className="browser-default custom-select mb-4">
                        <option>Servicios</option>
                        <option value="1">....</option>
                        <option value="2">....</option>
                        <option value="3">.....</option>
                    </select>
            </MDBCol>
            
            <Button variant="primary" onClick={handleClose}>
            Modificar
          </Button>
        </form>
     );
}
 
export default FormTurnos;