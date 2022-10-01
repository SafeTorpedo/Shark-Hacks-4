import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@mui/icons-material/Sort";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Nunito",
    },

    appbar: {
        background: "none",
    },
    icon: {
        color: "#fff",
        fontSize: "2rem",
    },
    appbarTitle: {
        flexGrow: "1",
    },
    appbarWrapper: {
        width: "80%",
        margin: "0 auto",
    },
    colorText: {
        color: "#03c9d1",
    },
    title: {
        color: "#fff",
        fontSize: "2.5rem",
    },
    container: {
        textAlign: "center",
    },
    goDown: {
        color: "#03c9d1",
        fontSize: "2.5rem",
    },
}));

function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>
                        <span className={classes.colorText}>Shark</span> Attax.
                    </h1>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}
            >
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        All you need for <br />a
                        <span className={classes.colorText}> Sharky </span>
                        Mood
                    </h1>
                    <IconButton>
                        <ExpandMoreIcon className={classes.goDown} />
                    </IconButton>
                </div>
            </Collapse>
        </div>
    );
}

export default Header;
