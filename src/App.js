import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import CardLinks from "./components/CardLinks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainForm from "./components/MainForm";
import ChatRoom from "./components/ChatRoom";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/background.jpg"
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Nunito",
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <CssBaseline />
                                <Header />
                                <CardLinks />
                            </>
                        }
                    ></Route>
                    <Route path="/chat" element={<MainForm />}></Route>
                    <Route path="/chat/:roomId" element={<ChatRoom />}></Route>
                    <Route path="*" element={<h1>404 Not Found</h1>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
