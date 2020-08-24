import React, { useState, useCallback } from 'react';
/* import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core'; */
import { Alert, AlertTitle } from '@material-ui/lab';
import { auth, db } from '../../firebase';
import { withRouter } from 'react-router-dom';

const Login = (props) => {

    const [email, setEmail] = useState('');
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
            await db.collection('usuarios').doc(res.user.email).set({
                email: res.user.email,
                uid: res.user.uid
            }); //puede ser el uid
            setEmail('');
            setPassword('');
            setError(null);
            props.history.push('/admin');

        } catch (error) {

            if (error.code === "auth/invalid-email")
                setError('Email no válido');
            if (error.code === "auth/invalid-email")
                setError('Email ya esta registrado');
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
            props.history.push('/admin');

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
            <div>
                <h1>
                    {
                        viewRegister ?
                            'Registro de usuario' : 'Ingresar a cuenta'
                    }
                </h1>
            </div>
            <form onSubmit={verifyUser}>
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
                <input type="text" onChange={e => setEmail(e.target.value)} value={email} />
                <input type="text" onChange={e => setPassword(e.target.value)} value={password} />
                <button type='submit'>{viewRegister ? 'Registrarse' : 'Acceder'}
                </button>
                <button type='button' onClick={() => setViewRegister(!viewRegister)}>
                    {
                        viewRegister ? '¿Ya estas registrado?' : '¿No tienes cuenta?'
                    }
                </button>
            </form>


        </div>
    );
};

export default withRouter(Login);