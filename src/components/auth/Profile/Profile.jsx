import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { db } from '../../../firebase';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import '../register.css';
import ModalProfile from './ModalProfile';
import NavbarLogin from '../Navbars/NavbarLogin';


const Profile = (props) => {

    const [user, setUser] = useState({
        name: '',
        car: '',
        plates: '',
        colorCar: '',
        //type: '',
    });

    const handleSubmit = e => {
        e.preventDefault();
        addDataUser(user);
    };

    const handleInputChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const addDataUser = (items) => {
        db
            .collection('usuarios')
            .doc('rRctJoWvRlfZpSYjSrcfdWsrjrn2')
            .update({
                name: user.name,
                car: user.car,
                plates: user.plates,
                colorCar: user.colorCar,
            })
            .then(function () {
                console.log("Document successfully updated!");
                props.history.push('/payment');
            })
            .catch(function (error) {
                console.error("Error updating document: ", error);
            });
    };

    return (
        <div>
            <NavbarLogin title='Detalles del auto' view='2/3' link='/login' />
            <div>
                <form onSubmit={handleSubmit} className='form-container'>
                    <TextField
                        id="standard-full-width"
                        label="Marca del automovil"
                        placeholder="Nissan"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleInputChange}
                    />
                    <TextField
                        id="standard-full-width"
                        label="Modelo automovil"
                        placeholder="ej. Sentra 2019"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleInputChange}
                    />
                    <TextField
                        id="standard-full-width"
                        label="Número de placa"
                        placeholder="123-ABC"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleInputChange}
                    />
                    <TextField
                        id="standard-full-width"
                        label="Color"
                        placeholder="Rojo"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleInputChange}
                    />
                    <Button type='submit' variant='contained' color='primary'>Continuar</Button>
                </form>
            </div >
        </div>
    );
};

export default withRouter(Profile);

