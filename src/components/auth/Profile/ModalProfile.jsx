import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';

export default function ModalProfile() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Editar Perfil
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                variant="contained"
                bodyStyle={{ backgroundColor: '#BCE5DF' }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">

                        <form noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="Nombre" variant="outlined" />
                            <TextField id="outlined-basic" label="Marca del automovil" variant="outlined" />
                            <TextField id="outlined-basic" label="Color del automovil" variant="outlined" />
                            <TextField id="outlined-basic" label="Placas" variant="outlined" />
                        </form>
                        <div>
                            <input
                                accept="image/*"
                                id="contained-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" color="primary" component="span">
                                    Upload
                                </Button>
                            </label>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Guardar
                     </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
