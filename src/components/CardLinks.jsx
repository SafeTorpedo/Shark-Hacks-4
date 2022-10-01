import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Cards from "./Cards";
import features from "../static/features";
import useWindowPosition from "../hooks/useWindowPosition";

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
    const checked = useWindowPosition("header");
    return (
        <div className={classes.root}>
            <Cards feature={features[0]} checked={checked} />
            <Cards feature={features[1]} checked={checked} />
        </div>
    );
};

export default CardLinks;
