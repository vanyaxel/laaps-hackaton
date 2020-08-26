import React from "react";
import NavbarDashboard from '../auth/Navbars/NavbarDashboad';
import Map from './Map';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ModalCurentService from './ModalCurentService';


const useStyles = makeStyles({
    numberEmployees: {
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: 600,
        color: '#2F5A62',
        marginTop: '60px'
    }
});


const ServiceIndex = () => {
    const classes = useStyles();
    return (
        <div>
            <NavbarDashboard />
            <Map />

            <ModalCurentService />
        </div>
    );
};

export default ServiceIndex;