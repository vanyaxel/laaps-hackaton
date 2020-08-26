import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavbarLogin from '../Navbars/NavbarLogin';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import DateRangeIcon from '@material-ui/icons/DateRange';
import SecurityIcon from '@material-ui/icons/Security';
import './CreditCard.css';
import useStyles from '../styles';

const CreditCardView = (props) => {

  const classes = useStyles();

  return (
    <div>
      <div>
        <NavbarLogin title="Agregar Tarjeta" view="3/3" link="/payment" />
      </div>

      <form className={classes.formPaymentT}>
        <FormControl className={classes.margin}>
          <Typography variant="h6" color="initial" className={classes.label}>No. de tarjeta</Typography>
          <Input
            className="numberIn"
            className={classes.inputPayment}
            startAdornment={
              <InputAdornment position="start">
                <CreditCardIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <Typography variant="h6" color="initial" className={classes.label}>Fecha de vencimiento</Typography>
          <Input
            className={classes.inputPayment}
            startAdornment={
              <InputAdornment position="start">
                <DateRangeIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <Typography variant="h6" color="initial" className={classes.label}>Código de seguridad</Typography>
          <Input
            className={classes.inputPayment}
            startAdornment={
              <InputAdornment position="start">
                <SecurityIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <Link to='/dashboard'><Button type='submit' variant='contained' color='primary' className={classes.lastBtn}>Registrar</Button></Link>
      </form>
    </ div>
  );
};

export default withRouter(CreditCardView);
