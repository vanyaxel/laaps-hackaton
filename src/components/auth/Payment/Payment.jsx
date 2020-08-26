import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import NavbarLogin from '../Navbars/NavbarLogin';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import './CreditCard.css';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '90vh',
    position: 'relative',
    top: '70px'
  },
  btns: {
    marginTop: '50px'
  },
  btn: {
    margin: 10,
    fontSize: '16px',
    color: '#213D57',
    textDecoration: 'none',
    fontWeight: 600
  },
  line: {
    width: '300px',
    height: '2px',
    backgroundColor: '#ffff',
  },
  link: {
    textDecoration: 'none'
  }
}));

const Payment = (props) => {

  const classes = useStyles();

  return (
    <div className='payment'>
      <NavbarLogin title='Método de pago' view='3/3' link='/profile' icon={<ArrowBackIos />} />
      <form className={classes.form}>
        <p> Elegir método de pago </p>
        <div className={classes.btns}>
          <div className={classes.line}></div>
          <Link to='/creditcard' className={classes.link}>
            <Button
              type="submit"
              className={classes.btn}
            >
              Tarjeta de Crédito o Débito
          </Button>
          </Link>
          <div className={classes.line}></div>
          <Button
            type="submit"
            className={classes.btn}
          >
            PayPal
          </Button>
          <div className={classes.line}></div>
        </div>
      </ form>
    </div>
  );
};

export default withRouter(Payment);
