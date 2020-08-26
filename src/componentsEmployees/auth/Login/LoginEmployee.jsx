import React, { useState, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { auth, db } from '../../../firebase';
import { withRouter } from 'react-router-dom';
import NavbarLogin from '../Navbars/NavbarLogin';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles';

import '../register.css';

const Login = (props) => {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [viewRegister, setViewRegister] = useState(true);

    const verifyUser = e => {
        e.preventDefault();
        if (!email.trim()) {
            setError('Ingrese email');
            return;
        }
        if (!password.trim()) {
            setError('Ingrese contraseña');
            return;
        }
        if (password.length < 6) {
            setError('Ingrese contraseña de mas de 6 caracteres');
            return;
        }

        setError(null);
        if (viewRegister) {
            login();
        }
    };

    const register = useCallback(async () => {

        try {
            const res = await auth.createUserWithEmailAndPassword(email, password);
            console.log(res.user);
            await db.collection('usuarios').doc(res.user.uid).set({
                email: res.user.email,
                uid: res.user.uid,
                name: name,
                car: '',
                colorCar: "",
                plates: '',
                location: '',
                carPhoto: '',
            }); //puede ser el uid
            setEmail('');
            setPassword('');
            setError(null);
            props.history.push('/profile');

        } catch (error) {

            if (error.code === "auth/invalid-email")
                setError('Email no válido');
            if (error.code === "auth/invalid-email")
                setError('Email inválido');
            if (error.code === "auth/email-already-in-use")
                setError('Email ya esta registrado');
        }
    }, [email, password, props.history],
    );

    const login = useCallback(async () => {
        try {
            /* const res = */ await auth.signInWithEmailAndPassword(email, password);
            setEmail('');
            setPassword('');
            setError(null);
            props.history.push('/dashboard-employee');

        } catch (error) {
            if (error.code === "auth/user-not-found")
                setError('Email no registrado');
            if (error.code === "auth/wrong-email")
                setError('Email inválido');
            if (error.code === "auth/wrong-password")
                setError('Contraseña inválido');
        }
    },
        [email, password, props.history],
    );

    return (
        <div>
            <NavbarLogin title='Ingreso' link='/' exact icon={<ArrowBackIos />} />
            <div >
                <form className='form-container' autoComplete="off" onSubmit={verifyUser}>
                    {
                        error && (
                            <div>
                                <Alert severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    {error}
                                </Alert>
                            </div>
                        )
                    }
                    <Typography variant="h6" color="initial" className={classes.label}>Emaiil</Typography>
                    <TextField
                        id="standard-full-width"
                        placeholder="Escibe aqui tu Nombre"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        className={classes.input}
                    />
                    <Typography variant="h6" color="initial" className={classes.label}>Password</Typography>
                    <TextField
                        id="standard-full-width"
                        placeholder="Escibe aqui tu Contraseña"
                        type="password"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        className={classes.input}
                    />

                    <Button type='submit' variant='contained' color='primary' className={classes.btn}>Continuar</Button>
                </form>
            </div>
        </div>
    );
};

export default withRouter(Login);
