import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@mui/icons-material/Sort";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link as Scroll } from "react-scroll";

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
        fontSize: "1.3rem",
    },
    icon: {
        color: "#fff",
    },
    appbarTitle: {
        flexGrow: "1",
    },
    appbarWrapper: {
        width: "80%",
        margin: "0 auto",
    },
    colorText: {
        color: "#01183d",
    },
    title: {
        color: "#fff",
        fontSize: "5rem",
        marginTop: 90,
        fontFamily: "Nunito",
    },
    container: {
        textAlign: "center",
    },
    goDown: {
        color: "#01183d",
    },
}));

function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div className={classes.root} id="header">
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
                    <Scroll to="cards" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon
                                fontSize="large"
                                className={classes.goDown}
                            />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    );
}

export default Header;
