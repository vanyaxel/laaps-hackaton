import React from "react";
import Typography from "@material-ui/core/Typography";
import { withRouter, Link } from "react-router-dom";
import NavbarDashboard from '../../auth/Navbars/NavbarDashboad';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import CardUser from '../../CurrentService/StatusService/CardUser';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        fontWeight: 600
    },
    tip: {
        fontSize: '12px',
        color: '#435387',
    },
    text1: {
        color: '#435387',
        padding: '2px',
        fontSize: '19px',
        fontWeight: 700

    },
    text: {
        color: '#435387',
        padding: '2px',
        fontSize: '15px',

    },
    btnPay: {
        width: '265px',
        height: '40px',
        marginTop: '42px',
        fontSize: '16px',
        marginTop: '10px !impotant'
    }
});

const CancelService = () => {

    const classes = useStyles();

    return (
        <div>
            <NavbarDashboard />
            <Typography variant="h6" className={classes.text1}> en camino: </Typography>
            <CardUser />
            <div className={classes.container}>
            <Link to='/status-service'>
                    <Button className={classes.btnPay} color='secondary' variant='contained'>ACEPTAR</Button></Link>
                    <br></br>
               
                <Link to='/confirm'>
                    <Button className={classes.btnPay} color='secondary' variant='contained'>CANCELAR</Button></Link>
            </div>
        </div>
    );
};

export default CancelService;