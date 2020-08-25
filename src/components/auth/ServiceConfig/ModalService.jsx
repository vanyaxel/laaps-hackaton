import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import { Checkbox, FormControlLabel } from '@material-ui/core';

export default function ModalService() {
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
                Pedir Servicio
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">

                        <form noValidate autoComplete="off">
                            <p> ¿Alguna solicitud especial? </p>
                            <FormControlLabel
        control={<Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Sí"
      />
        <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="No"
      />
                            <TextField aria-label="minimum height" 
                                variant="outlined"
                                multiline
                                rowsMin={3}
                                borderradius={16}
                                border={1}
                                placeholder="Escriba su solicitud" />
                        </form>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary" autoFocus>
                        CONFIRMAR SERVICIO
                     </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
