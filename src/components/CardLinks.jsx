import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Cards from "./Cards";
import features from "../static/features";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));

const CardLinks = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Cards feature={features[0]} />
            <Cards feature={features[1]} />
        </div>
    );
};

export default CardLinks;
