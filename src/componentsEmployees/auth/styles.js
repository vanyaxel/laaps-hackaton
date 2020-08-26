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
    },
    formPaymentT: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
    },
    inputPayment: {
        background: '#ffff',
        borderRadius: '20px',
        width: '250px',
        height: '45px',
        marginTop: '5px',
    },
    lastBtn: {
        width: '265px',
        height: '40px',
        background: '#13B6AC',
        marginTop: '42px',
        fontSize: '16px'
    }
});

export default useStyles;