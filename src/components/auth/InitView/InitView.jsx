import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import logo from '../../../images/laaps1.png';
import './init-view.css';

const initView = ({ setViewNavbar }) => {

    const redirectLogin = () => {
        setViewNavbar(true);
    };

    return (
        <div className='init-view'>
            <div>
            </div>
            <div>
                <img src={logo} alt="logo-laaps" />
                <p className='text-logo'>La forma eco de lavar tu auto</p>
            </div>
            <Button color='primary' variant='contained'>Registrarte</Button>
            <div className='login-opt-containe'>
                <p className='text-login'>¿Ya tienes cuenta?</p>
                <Link to='/login'><p className='text-login link'>Ingresa aqui</p></Link>
            </div>
        </div>
    );
};

export default initView;