import React, { useState, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { auth, db } from '../../../firebase';
import { withRouter } from 'react-router-dom';
import NavbarLogin from '../Navbars/NavbarLogin';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

import '../register.css';

const Login = (props) => {

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
            register();
        } else {
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
            props.history.push('/profile');

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
            <NavbarLogin title='Registro' view='1/3' link='/' exact icon={<ArrowBackIos />} />
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
                    <TextField
                        id="standard-full-width"
                        label="Name"
                        placeholder="Escibe aqui tu Nombre"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                    <TextField
                        id="standard-full-width"
                        label="Email"
                        placeholder="Escibe aqui tu Nombre"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <TextField
                        id="standard-full-width"
                        label="password"
                        placeholder="Escibe aqui tu Contraseña"
                        type="password"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />

                    <Button type='submit' variant='contained' color='primary'>Continuar</Button>
                </form>
            </div>
        </div>
    );
};

export default withRouter(Login);
