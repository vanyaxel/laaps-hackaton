import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    input: {
        background: '#ffff',
        borderRadius: '20px',
        padding: '10px',
        width: '250px',
        height: '40px',
        marginTop: '5px !important'
    },
    label: {
        paddingLeft: '20px',
        color: '#2F5062',
        fontWeight: 700
    },
    btn: {
        width: '265px',
        height: '40px',
        background: '#13B6AC',
        marginTop: '42px',
        position: 'relative',
        left: '22px',
        fontSize: '16px'
    }
});

export default useStyles;