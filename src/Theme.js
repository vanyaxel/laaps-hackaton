import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#8bc4b9',
            main: '#2F5A62',
            dark: '#4d7f75',
            contrastText: '#F7F9FB',
        },
        secondary: {
            light: '#6CA0DE',
            main: '#435387',
            dark: '#2e3a5e',

            contrastText: '#F7F9FB',
        },
    },
    typography: {
        fontFamily: ['Open Sans', 'sans-serif'].join(', '),
        h6: {
            fontSize: '17px'
        },
        body2: {
            fontSize: '12px'
        }
    },

    shape: {
        borderRadius: 18
    },

});

export default theme;