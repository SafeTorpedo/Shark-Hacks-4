import * as React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Collapse } from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        background: "rgba(0,0,0,0.3)",
        marginTop: "25rem",
        marginBottom: "5rem",
        margin: "20px",
    },
    media: {
        height: 250,
    },
    title: {
        fontFamily: "Nunito",
        fontWeight: "bold",
        fontSize: "3rem",
        color: "#fff",
    },
    desc: {
        fontFamily: "Nunito",

        fontSize: "1.1rem",
        color: "#ddd",
    },
    button: {
        color: "white",

        fontFamily: "Nunito",
        fontSize: "1rem",
        height: "3rem",
        paddingLeft: "1rem",
    },
}));

const Cards = ({ feature, checked }) => {
    const classes = useStyles();

    return (
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    component="img"
                    height="140"
                    image={feature.imageURL}
                    alt="Photo"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className={classes.title}
                    >
                        {feature.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className={classes.desc}
                    >
                        {feature.desc}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link className={classes.button} to={feature.URL}>
                        Try
                    </Link>
                </CardActions>
            </Card>
        </Collapse>
    );
};

export default Cards;
