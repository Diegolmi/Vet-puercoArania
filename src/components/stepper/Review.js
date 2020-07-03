import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import './carrito.css';
import axiosInstance from '../util/axiosInstance';





const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();
  const [userCarrito, setUserCarrito] = useState([]);
  const [usuarios, setUsuarios] = useState({});



  //traer carrito para mostrar informacion de los productos para comprar
  const mostrarCarrito = async () => {
    const response = await axiosInstance.get('/shoppingCart')
    setUserCarrito(response.data.items || [])
    setUsuarios(response.data.customer)
    
  }
  // console.log(userCarrito);
  // console.log(usuarios);

  useEffect(() => {
    mostrarCarrito()
  }, [])

  const total =+ userCarrito.reduce((acc, item) => {
    return acc + item.product.price * item.quantity
}, 0)

  const products = userCarrito.map(carrito => ({
    
    name: carrito.product.name, 
    price: carrito.product.price * carrito.quantity,
    
  }))
  
  const addresses =[
     usuarios.address,
      usuarios.province, 
     usuarios.city, 
     usuarios.zip, 
     
    ];
  const payments = [
    { name: 'Envio', detail: 'free' },
    { name: 'Total a Pagar', detail: total },
  ];

  return (
    <div className="review">
      <Typography variant="h6" gutterBottom>
        Orden de Compra
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $ {total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Datos de Envio
          </Typography>
        <Typography gutterBottom>{usuarios.name} {usuarios.lastname}</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Detalle de Pago
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}