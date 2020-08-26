import React from 'react';
import NavbarLogin from '../Navbars/NavbarLogin';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';


const Payment = () => {
    return (
        <div>
            <NavbarLogin title='Método de pago' view='3/3' link='/profile' icon={<ArrowBackIos />} />
            <div>
                Aqui va lo de Mara
            </div>
        </div>
    );
};

export default Payment;