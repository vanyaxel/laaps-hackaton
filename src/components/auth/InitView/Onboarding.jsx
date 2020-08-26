import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import view2 from '../../../images/view2.png';
import view3 from '../../../images/view3.png';

import Button from '@material-ui/core/Button';
import logo from '../../../images/laaps1.png';
import './init-view.css';

const useStyles = makeStyles({
    backgroundBtns: {
        background: '#13B6AC',
        width: '300px',
        height: '50px',
        textTransform: 'uppercase',
        color: '#ffff',
        fontSize: '16px'
    },
    view2: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        paddingLeft: '40px',
        paddingRight: '40px'
    },
});
function Profile() {

    const classes = useStyles();
    const [view, setView] = useState(2);

    const changeView1 = () => {
        setView(3);
    };


    //const classes = useStyles();

    return (
        <div>
            {
                view === 2 ? (
                    <div className={classes.view2}>
                        <img src={view2} alt="car" />
                        <Typography variant="h6" color="initial">El autolavado que va hacia ti, con productos 100% ecológicos y sin utilizar agua</Typography>
                        <Button
                            color='secondary' variant='contained' onClick={changeView1} className={classes.backgroundBtns}>Continuar</Button>
                        <Typography variant="h6" color="initial">¿Ya tienes una cuenta?  Ingresa aquí</Typography>
                    </div>
                ) : null
            }
            {
                view === 3 ? (
                    <div className={classes.view2}>
                        <img src={view3} alt="car" />
                        <Typography variant="h6" color="initial">Sin filas, ni espera, paga el servicio a través de la app</Typography>
                        <Link to='/login'><Button
                            color='secondary' variant='contained' className={classes.backgroundBtns}>Registrate</Button></Link>
                        <Typography variant="h6" color="initial">¿Ya tienes una cuenta?  Ingresa aquí</Typography>
                    </div>
                ) : null
            }
        </div>
    );
};


export default Profile;
