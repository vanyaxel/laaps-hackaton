import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavbarLogin from '../Navbars/NavbarLogin';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

import Button from '@material-ui/core/Button';

const Payment = (props) => {
  return (
    <div>
      <div>
        <NavbarLogin title='Método de pago' view='3/3' link='/profile' icon={<ArrowBackIos />} />
        <div>
          Aqui va lo de Mara
            </div>
      </div>
      <form>
        <p> Elegir método de pago </p>
        <Link to='/creditcard' >
          <Button
            variant="outlined"
            color="primary"
            type="submit"
          >
            Tarjeta de Crédito o Débito
          </Button>
        </Link>
        <Button
          variant="outlined"
          color="secondary"
          type="submit"
        >
          PayPal
          </Button>
      </ form>
    </div>
  );
};

export default withRouter(Payment);
