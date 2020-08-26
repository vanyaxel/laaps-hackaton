import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

import './navbar.css';

const NavbarLogin = (props) => {

    return (
        <div className='navbar'>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="secondary" aria-label="menu">
                        <Link to={props.link} exact>{props.icon}</Link>
                    </IconButton>
                    <p>{props.title}</p>
                    <p>{props.view}</p>
                </Toolbar>
            </AppBar >
        </div >
    );
};

export default withRouter(NavbarLogin);

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