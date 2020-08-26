import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  containaer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default function ModalService() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dialogStyle = {
    backgroundColor: '#BCE5DF',
    display: 'block',
    alignContent: 'center'
  };

  const babyInput = {
    backgroundColor: 'white',
  }

  const serviceButton = {
    width: '70%'
  };



  return (
    <div className={classes.containaer}>
      <Button
        variant="contained"
        color="secondary"
        style={serviceButton}
        onClick={handleClickOpen}>
        Pedir Servicio
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent
          style={dialogStyle}>
          <DialogContentText id="alert-dialog-description">
            <form noValidate autoComplete="off">
              <p> ¿Alguna solicitud especial? </p>
              <FormControlLabel
                control={
                  <Checkbox
                    name="checkedB"
                    color="primary"
                    icon={<CircleUnchecked />}
                    checkedIcon={<CircleCheckedFilled />}
                  />
                }
                label="Sí"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="checkedB"
                    color="primary"
                    icon={<CircleUnchecked />}
                    checkedIcon={<CircleCheckedFilled />}
                  />
                }
                label="No"
              />
              <TextField
                aria-label="minimum height"
                variant="outlined"
                multiline
                style={babyInput}
                rowsMin={4}
                borderradius={16}
                border={1}
                placeholder="Escriba su solicitud"
              />
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions
        style={dialogStyle}>
          <Link to="/confirm">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            fullHeight
            autoFocus
          >
            CONFIRMAR SERVICIO
          </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
