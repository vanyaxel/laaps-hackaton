import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from '@material-ui/core/styles';
import RatingEmployee from './RatingEmployee';

const useStyles = makeStyles({
    btn: {
        padding: 0,
    }
});

export default function SpecificService({ service }) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen}>
                <ArrowForwardIos className={classes.btn} />
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Detalles del servicio"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {service.trabajador}
                    </DialogContentText>
                </DialogContent>
                <DialogContent>
                    <p>Fecha: {service.fecha}</p>
                    <p>Hora: {service.hora}</p>
                    <p>Marca: Nissan Sentra</p>
                    <p>Color: Rojo</p>
                    <p>Placas: 123-ABC</p>
                    <p>Pago por el servicio:{service.costo}</p>

                    <p>Calificaste a Alvaro <RatingEmployee /></p>
                    <p>Hora: {service.hora}</p>
                    <p>Tu propina: $30.00</p>

                    <p>¿Necesitas ayuda con el servicio?</p>

                    <p>¿Deseas cambiar la calificación del lavador?</p>
                    <p>Cambiar calificación</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Regresar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
