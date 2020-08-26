import React from "react";
import Mapbox from "../../../mapbox/Mapbox";
import Typography from "@material-ui/core/Typography";
import { withRouter, Link } from "react-router-dom";
import NavbarDashboard from '../../auth/Navbars/NavbarDashboad';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";


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

const ConfirmPay = () => {

    const classes = useStyles();

    return (
        <div>
            <NavbarDashboard />
            <Mapbox></Mapbox>
            <div className={classes.container}>
                <Typography
                    variant="h5" className={classes.text1}>Lavado exterior con encerado</Typography>
                <Typography
                    variant="h6" className={classes.text}>Precio por servicio:</Typography>
                <Typography
                    variant="h5" className={classes.text}>$130</Typography>
                <p className={classes.tip}>Recuerda dar propina si estás satisfecho con el servicio</p>
                <Link to='/cancel-service'>
                    <Button className={classes.btnPay} color='secondary' variant='contained'>Pagar</Button></Link>
            </div>
        </div>
    );

};

export default withRouter(ConfirmPay);
