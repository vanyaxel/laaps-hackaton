import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';
import InsertComment from '@material-ui/icons/InsertComment';
import CallSharp from '@material-ui/icons/CallSharp';
import RatingEmployee from './RatingEmployee';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        display: "flex",
        marginTop: '60px'
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
        padding: '20px;'
    }
});

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.container1}>
                <CardContent>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.image} />
                </CardContent>
            </CardActionArea>

            <CardActionArea className={classes.container2}>
                <CardContent className={classes.container2Text}>
                    <Typography gutterBottom variant="h6" component="h4">
                        Alvaro Sánchez Rojas
                    </Typography>
                    <RatingEmployee />
                    <InsertComment />
                    <CallSharp />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}