import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase';


import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import './profile.css';
import ModalProfile from './ModalProfile';

const Profile = (props) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        if (auth.currentUser) {
            console.log('existe un usuario');
            setUser(auth.currentUser);
        } else {
            console.log('no existe usuario');
            props.history.push('/login');
        }
    }, []);

    const handleChange = (event) => {
        console.log(event.target.value);
    };

    return (
        <div>
            <h1>Perfil</h1>
            {
                user && (
                    <div>
                        {/* <h2>{user.email}</h2>
                            <h2>{user.uid}</h2>
                            <div className='info-user'>
                                <Input placeholder="Nombre" inputProps={{ 'aria-label': 'description' }} />
                                <Input placeholder="aqui va el nombre" inputProps={{ 'aria-label': 'description' }} />
                                <Input placeholder="aqui va auto" inputProps={{ 'aria-label': 'description' }} />
                                <Input placeholder="color del autp" inputProps={{ 'aria-label': 'description' }} />
                                <Input placeholder="aqui va placas" inputProps={{ 'aria-label': 'description' }} />
                                <div>
                                    <input
                                        accept="image/*"
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" color="primary" component="span">
                                            Upload
                                    </Button>
                                    </label>
                                </div>
                            </div>
                            <div> */}
                        <h2>{user.email}</h2>
                        <h2>{user.uid}</h2>
                        <div className='info-user'>
                            <Typography variant="h5" gutterBottom>
                                Nombre
                                </Typography>
                            <Typography variant="h5" gutterBottom>
                                aqui va auto
                                </Typography>
                            <Typography variant="h5" gutterBottom>
                                color del auto
                                </Typography>
                            <Typography variant="h5" gutterBottom>
                                aqui va placas
                                </Typography>
                            <div>imagen</div>
                            <ModalProfile />
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default withRouter(Profile);
