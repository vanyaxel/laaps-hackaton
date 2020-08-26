import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import NavbarLogin from '../auth/Navbars/NavbarLogin';
import Close from '@material-ui/icons/Close';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';
import RatingEmployee from './RatingEmployee';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import './pre-services.css';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        display: "flex",
        marginTop: '20px',
    },
    container1: {
        background: "#13B6AC"
    },
    image: {
        width: 75,
        height: 75,
        margin: 0
    },
    container2Text: {
        padding: '10px;',
        width: '199px',

    },
    ratingContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }

});

function useAllOrder() {
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        db
            .collection('servicios')
            //            .orderBy('date', 'desc')
            //          .limit(30)
            .where('cliente', '==', 'iEqmtbBnocrDdhnxkpG9')
            .onSnapshot((snapshot) => {
                const newOrder = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setAllServices(newOrder);
            });
    }, []);
    return allServices;
}

const PreviousServices = () => {
    const services = useAllOrder();
    console.log(services);
    const classes = useStyles();


    const info = db
        .collection('usuarios')
        .doc('iEqmtbBnocrDdhnxkpG9')
        .get()
        .then(function (doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

    return (
        <div >
            <NavbarLogin title='Tus servicios solicitados' link='/dashboard' icon={<Close />} />

            <div className='container-card-prev-services'>
                {
                    services.map(service =>
                        <Card className={classes.root}>
                            <CardActionArea className={classes.container1}>
                                <CardContent>
                                    <Avatar alt="Remy Sharp" src={`/images/${service.id}.png`} className={classes.image} />
                                </CardContent>
                            </CardActionArea>

                            <CardActionArea className={classes.container2}>
                                <CardContent className={classes.container2Text}>
                                    <Typography gutterBottom variant="h6" component="h4">
                                        {service.trabajador}
                                    </Typography>
                                    <Typography gutterBottom variant="body2" component="h4">
                                        {service.fecha}  {service.hora}
                                    </Typography>
                                    <Typography gutterBottom variant="body2" component="h4">
                                        Chevrolet Spark
                                </Typography>
                                    <div className={classes.ratingContainer} >
                                        <RatingEmployee />
                                        <Typography gutterBottom variant="body2" component="h4">
                                            $130.00
                                    </Typography>
                                        <ArrowForwardIos />
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card >
                    )
                }
            </div>
        </div>
    );
};

export default PreviousServices;