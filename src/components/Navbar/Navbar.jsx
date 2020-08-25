import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../../firebase';
import { withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const Navbar = (props) => {


    const logout = () => {
        auth.signOut()
            .then(() => {
                props.history.push('/login');
            });
    };

    return (
        < div >
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Link to="/"><Button color="inherit" variant='contained'>Auth</Button></Link>
                    <div>
                        <NavLink to='/' exact >
                            <Button variant='contained' color='secondary'>Inicio</Button>
                        </NavLink>
                        <NavLink to='/profile' exact >
                            <Button variant='contained' color='secondary'>Profile</Button>
                        </NavLink>
                        <NavLink to='/service' exact >
                            <Button variant='contained' color='secondary'>Service</Button>
                        </NavLink>


                        {
                            props.firebaseUser !== null ? (
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    onClick={() => logout()}
                                >
                                    Cerrar sesión
                                </Button>

                            ) : (
                                    <NavLink to='/login' exact >
                                        <Button variant='contained' color='secondary'>Login</Button>
                                    </NavLink>
                                )
                        }
                    </div>
                </Toolbar>
            </AppBar >
        </div >
    );
};

export default withRouter(Navbar);

{/* <div >
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Link to="/"><Button color="inherit" variant='contained'>Auth</Button></Link>
                    <div>
                        <NavLink to='/' exact >
                            <Button variant='contained' color='secondary'>Inicio</Button>
                        </NavLink>
                        {
                            user !== null ? (<NavLink to='/admin' exact >
                                <Button variant='contained' color='secondary'>Admin</Button>
                            </NavLink>) : null
                        }

                        {
                            user !== null ? (
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    onClick={() => logout()}
                                >
                                    Cerrar sesión
                                </Button>
                            ) : (
                                    <NavLink to='/login' exact >
                                        <Button variant='contained' color='secondary'>Login</Button>
                                    </NavLink>
                                )
                        }
                    </div> */}