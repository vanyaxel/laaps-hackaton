import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarLogin from '../Navbars/NavbarLogin';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SecurityIcon from '@material-ui/icons/Security';
import './CreditCard.css'

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));


const Paypal = (props) => {

    const classes = useStyles();

  return (
    <div>
        <div>
        <NavbarLogin title="Agregar PayPal" view="3/3" link="/payment" />
        </div>
        <form className='form-container'>
      <FormControl className={classes.margin}>
        <InputLabel>Correo PayPal</InputLabel>
        <Input
          className="numberIn"
          startAdornment={
            <InputAdornment position="start">
              <AccountBoxIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel>Contraseña</InputLabel>
        <Input
          className="numberIn"
          startAdornment={
            <InputAdornment position="start">
              <SecurityIcon />
            </InputAdornment>
          }
        />
      </FormControl>
                    <Button type='submit' variant='contained' color='primary'>Continuar</Button>
                </form>
        </ div>
)
};

export default withRouter(Paypal);