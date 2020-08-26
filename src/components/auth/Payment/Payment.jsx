import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavbarLogin from '../Navbars/NavbarLogin';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import './CreditCard.css';
import Button from '@material-ui/core/Button';

const Payment = (props) => {
  return (
    <div>
      <div>
        <NavbarLogin title="Método de pago" view="3/3" link="/profile" />
      </div>
      <form>
        <p> Elegir método de pago </p>
        <Link to="/creditcard">
          <Button variant="filled" color="primary" type="submit">
            Tarjeta de Crédito o Débito
          </Button>
        </Link>
        <Link to="/paypal"> <br/>
          <Button variant="filled" color="secondary" type="submit">
            PayPal
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default withRouter(Payment);
