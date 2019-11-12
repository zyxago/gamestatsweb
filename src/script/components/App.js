import React from "react";
import {
    Route,
    Switch,
    BrowserRouter as Router,
    Redirect
} from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Players from "./Players";
import "../../css/App.css";




export default function App() {
    return (
        <Router>
            <div id="wrapper-left"></div>
            <div id="container">
                <Header title="Spelare" />
                <Nav authToken="W.I.P" />
                <div id="mainContent">
                    <Switch>
                        <Route path="/players"><Players /></Route>
                        <Route path="/games"></Route>
                        <Route><Redirect to="/players" /></Route>
                    </Switch>
                </div>
                <Footer />
            </div>
            <div id="wrapper-right"></div>
        </Router>
    );
}