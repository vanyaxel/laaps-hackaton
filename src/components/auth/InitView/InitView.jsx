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
    }
});
function Profile() {

    const classes = useStyles();
    const [view, setView] = useState(1);

    const changeView1 = () => {
        setView(2);
    };

    const changeView2 = () => {
        setView(3);
    };

    //const classes = useStyles();

    return (
        <div >

            <div className='init-view'>
                <div>
                    <img src={logo} alt="logo-laaps" />
                    <p className='text-logo'>La forma eco de lavar tu auto</p>
                </div>
                <Link to='/choose-user'>
                    <Button variant='contained' className={classes.backgroundBtns} onClick={changeView1}>Registrate</Button></Link>
                <div className='footer'>
                    <h5>Team Laaps</h5>
                </div>
            </div>
        </div >
    );
};


export default Profile;

