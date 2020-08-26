import React from "react";
import NavbarDashboard from '../auth/Navbars/NavbarDashboad';
import Map from './Map';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardUser from './CardUser';

const useStyles = makeStyles({
    textTime: {
        fontSize: '16px',
        margin: '30px',
        color: '#2F5A62',
    },
    custumeInfo: {
        display: 'flex',
        justifyContent: 'center'
    }
});


const ServiceIndex = () => {
    const classes = useStyles();
    return (
        <div>
            <NavbarDashboard />
            <Map />
            <Typography className={classes.textTime}>Tiempo estimado de llegada: 32 minutos</Typography>
            <div className={classes.custumeInfo}>
                <CardUser />
            </div>
        </div>
    );
};

export default ServiceIndex;