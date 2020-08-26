import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { db } from '../../../firebase';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../register.css';
import useStyles from '../styles';
import NavbarLogin from '../Navbars/NavbarLogin';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';



const Profile = (props) => {

    const classes = useStyles();

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
                //props.history.push('/payment');
            })
            .catch(function (error) {
                console.error("Error updating document: ", error);
            });
    };

    return (
        <div>
            <NavbarLogin title='Detalles del auto' view='2/3' link='/login' icon={<ArrowBackIos />} />
            <div>
                <form onSubmit={handleSubmit} className='form-container-profile'>
                    <Typography variant="h6" color="initial" className={classes.label}>Marca</Typography>
                    <TextField
                        id="standard-full-width"
                        placeholder="Nissan"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleInputChange}
                        className={classes.input}
                    />
                    <Typography variant="h6" color="initial" className={classes.label}>Modelo</Typography>
                    <TextField
                        id="standard-full-width"

                        placeholder="ej. Sentra 2019"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleInputChange}
                        className={classes.input}
                    />
                    <Typography variant="h6" color="initial" className={classes.label}>Placas</Typography>
                    <TextField
                        id="standard-full-width"
                        placeholder="123-ABC"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleInputChange}
                        className={classes.input}
                    />
                    <Typography variant="h6" color="initial" className={classes.label}>Color</Typography>
                    <TextField
                        id="standard-full-width"
                        placeholder="Rojo"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleInputChange}
                        className={classes.input}
                    />
                    <Link to='/payment'><Button type='submit' variant='contained' color='primary' className={classes.btn}>Continuar</Button></Link>
                </form>
            </div >
        </div>
    );
};

export default withRouter(Profile);

