import React from "react";
import InfoButton from "./InfoButton";
import Mapbox from "../../../mapbox/Mapbox";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    input: {
        background: '#ffff',
        height: '50px',
        width: '250px',
        borderRadius: '45px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    containerLocation: {
        display: 'flex',
        justifyContent: 'center'
    },
    numberEmployees: {
        padding: '20px',
        fontSize: '20px',
        fontWeight: 600,
        color: '#2F5A62'
    }
});

const ServiceInfo = () => {

    const classes = useStyles();
    return (
        <div>
            <div className={classes.containerLocation}>
                <TextField
                    id="standard-full-width"
                    value='Calle Texcoco No. 12'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    className={classes.input}
                />
            </div>
            <div>
                <Mapbox />
            </div>
            <Typography
                className={classes.numberEmployees}
                variant="h5"
                gutterBottom> Tenemos -- lavadores en tu zona </Typography>
            <InfoButton></InfoButton>
        </div>
    );
};

export default ServiceInfo;