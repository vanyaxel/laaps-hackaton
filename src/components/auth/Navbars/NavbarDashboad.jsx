
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

import Menu from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    MuiToolbar: {
        background: '#BCE5DF',
        boxShadow: 'none',
        padding: 10,
        display: 'flex'
    },
    containerUser: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textName: {
        color: '#213D57',
        fontWeight: 600,
        marginLeft: '20px',
        marginRight: '45px',
    }
}));

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState(false);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List component="nav">
                <ListItem button>
                    <Link to='/previous-services'>
                        <ListItemText primary="Tus servicios solicitados" />
                    </Link>
                </ListItem>
                <Divider />
                <ListItem button>
                    <Link to='/'>
                        <ListItemText primary="Pago" />
                    </Link>
                </ListItem>
                <Divider />
                <ListItem button>
                    <Link to='/'>
                        <ListItemText primary="Ayuda" />
                    </Link>
                </ListItem>
                <Divider />
                <ListItem button>
                    <Link to='/'>
                        <ListItemText primary="Configuración" />
                    </Link>
                </ListItem>
            </List>
        </div>
    );

    return (
        <AppBar position="static" className={classes.MuiToolbar}>
            <Toolbar>
                <div>
                    <Button onClick={toggleDrawer(state, true)}><Menu /></Button>
                    <Drawer open={state} onClose={toggleDrawer(state, false)}>
                        {list(state)}
                    </Drawer>
                </div>
                <div className={classes.containerUser}>
                    <p className={classes.textName}>Para Camila López</p>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
            </Toolbar>
        </AppBar >

    );
}
