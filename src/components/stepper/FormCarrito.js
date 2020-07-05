import React, { useEffect, useState } from 'react';
import './carrito.css';
// import { MDBBtn, MDBInput, MDBRow, MDBCol } from 'mdbreact';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import { useForm } from 'react-hook-form';
import axiosInstance from '../util/axiosInstance';



const FormCarrito = ({ onFormChange }) => {

  const { register, errors, formState:{isValid} } = useForm({mode: 'onChange'});
  const [cartUser, setCartUser] = useState({})
  const [name, setName] = React.useState('Cat in the Hat');
  const handleChange = (event) => {
    setName(event.target.value);
  };
  

  const userForm = async () => {
    const response = await axiosInstance.get('/shoppingCart')
    setCartUser(response.data.customer || [])
  }

  useEffect(() => {
    userForm();
    onFormChange(isValid);
}, [isValid, onFormChange, ])

  return (
    <>
    
    <div className="shipping-address">
      <h1>Datos de Envio</h1>
    </div>
    <form className="formulario-carrito">
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            value={cartUser.username}
            id="firstName"
            name="firstName"
            label="Nombre"
            fullWidth
            autoComplete="given-name"
            inputRef={
              register({
                  required: {
                      value: true, 
                      message: 'Nombre es requerido'
                      }
              })
          }
          />
             <span className="text-danger">{errors?.firstName?.message}</span>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Apellido"
            fullWidth
            autoComplete="family-name"
            inputRef={
              register({
                  required: {
                      value: true, 
                      message: 'Apellido es requerido'
                      }
              })
          }
          />
          <span className="text-danger">{errors?.lastName?.message}</span>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Dirección 1"
            fullWidth
            autoComplete="shipping address-line1"
            inputRef={
              register({
                  required: {
                      value: true, 
                      message: 'La dirección es requerida'
                      }
              })
          }
          />
          <span className="text-danger">{errors?.address1?.message}</span>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Dirección 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Ciudad"
            fullWidth
            autoComplete="shipping address-level2"
            inputRef={
              register({
                  required: {
                      value: true, 
                      message: 'La Ciudad es requerida'
                      }
              })
          }
          />
          <span className="text-danger">{errors?.city?.message}</span>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            id="state"
            name="state"
            label="Provincia"
            fullWidth
            inputRef={
              register({
                  required: {
                      value: true, 
                      message: 'Ingrese su Provincia'
                      }
              })
          }
          />
          <span className="text-danger">{errors?.state?.message}</span>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            type="number"
            id="zip"
            name="zip"
            label="Codigo Postal"
            fullWidth
            autoComplete="shipping postal-code"
            inputRef={
              register({
                  required: {
                      value: true, 
                      message: 'El codigo posta es requerido'
                      }
              })
          }
          />
          <span className="text-danger">{errors?.zip?.message}</span>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Pais"
            fullWidth
            autoComplete="shipping country"
            inputRef={
              register({
                  required: {
                      value: true, 
                      message: 'Ingrese el Pais'
                      }
              })
          }
            
          />
          <span className="text-danger">{errors?.country?.message}</span>
        </Grid>
        
      </Grid>
    </form>

    </>
  );
}

export default FormCarrito;