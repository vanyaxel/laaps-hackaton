import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import car from '../../images/car.png';

const useStyles = makeStyles({
    btnModalService: {
        margin: '40px',
        position: 'relative',
        top: '20px',
        left: '60px'
    },
    bkgModal: {
        background: '#BCE5DF',
        borderRadius: '0px',
        heigth: '550px',
        width: '300px'
    },
    title: {
        color: '#213D57',
        textAlign: 'center'
    },
    imgCar: {
        width: '105px',
        borderRadius: '100px',
        margin: '20px'
    },
    infoService: {
        background: '#ffff',
        borderRadius: '30px',
        textAlign: 'left',
        marginLeft: '45px',
        marginRight: '45px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    textService: {
        color: '#435387',
        margin: '2px',
    },
    btnAccept: {
        width: '265px',
        height: '40px',
        background: '#FFFFFF',
        color: '#13B6AC',
        marginTop: '20px',

        fontSize: '16px'
    },
    btnDecline: {
        width: '265px',
        height: '40px',
        background: '#213D57',
        color: '#F7F9FB',
        marginTop: '20px',
        marginBottom: '20px',
        fontSize: '16px'
    },
    btnPetition: {
        width: '265px',
        height: '20px',
    },
    containerBtns: {
        display: 'flex',
        flexDirection: 'column'
    },
    infoPetition: {
        background: '#ffff',
        borderRadius: '30px',
        textAlign: 'left',
        marginLeft: '45px',
        marginRight: '45px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '255px'
    },
});

export default function AlertDialog() {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [openModal2, setOpenModal2] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
        setOpenModal2(false);

    };

    const notification = () => {
        setOpenModal2(true);
    };

    return (
        <div>
            <Button onClick={handleClickOpen} className={classes.btnModalService}>
                En espera de servicio      </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                classes={{ paper: classes.bkgModal }}
            >
                {
                    openModal2 === false ? (

                        <div>
                            <DialogTitle id="alert-dialog-title" className={classes.title}>{"Petición especial"}</DialogTitle>
                            <DialogContent className={classes.infoService}>
                                <img src={car} alt="car" className={classes.imgCar} />
                                <DialogContentText id="alert-dialog-description">

                                    <p className={classes.textService}>Camila López</p>
                                    <p className={classes.textService}>Chevrolet Spark</p>
                                    <p className={classes.textService}>Azul marino</p>
                                    <p className={classes.textService}>45YUK2</p>
                                </DialogContentText>
                            </DialogContent>
                        </div>
                    ) : (
                            <div>
                                <DialogTitle id="alert-dialog-title" className={classes.title}>{"Nueva solicitud en tu zona"}</DialogTitle>
                                <DialogContent className={classes.infoPetition}>
                                    <DialogContentText id="alert-dialog-description">
                                        <p className={classes.textService}>Camila López:
                                        Hola, salí a carretera y necesito que limpies la parte delantera que esta llena de mosquitos!

Gracias</p>
                                    </DialogContentText>
                                </DialogContent>

                            </div>
                        )
                }
                <DialogActions className={classes.containerBtns}>
                    <Button onClick={handleClose} color="primary" className={classes.btnAccept}>
                        Rechazar
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus className={classes.btnDecline}>
                        Aceptar
                    </Button>
                    <Button onClick={notification} color="primary" className={classes.btnPetition}>
                        Petición
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
