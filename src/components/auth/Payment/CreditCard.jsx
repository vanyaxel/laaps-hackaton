import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarLogin from '../Navbars/NavbarLogin';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import DateRangeIcon from '@material-ui/icons/DateRange';
import SecurityIcon from '@material-ui/icons/Security';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import './CreditCard.css'

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));


const CreditCardView = (props) => {

    const classes = useStyles();

  return (
    <div>
        <div>
        <NavbarLogin title="Agregar Tarjeta" view="3/3" link="/payment" icon={<ArrowBackIos />}/>
        </div>
        <form className='form-container-profile'>
        <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">No. de tarjeta</InputLabel>
        <Input
          className="numberIn"
          type="number"
          startAdornment={
            <InputAdornment position="start">
              <CreditCardIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel>Fecha de vencimiento</InputLabel>
        <Input
          className="numberIn"
          placeholder="MM/AA"
          type="number"
          startAdornment={
            <InputAdornment position="start">
              <DateRangeIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel>Código de seguridad</InputLabel>
        <Input
          className="numberIn"
          type="number"
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

export default withRouter(CreditCardView);
