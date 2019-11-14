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
import Matches from "./Matches";
import "../../css/App.css";
import Popup from "./Popup";





export default function App() {

    let [popupShow, setPopupShow] = React.useState(false);
    let [popupLocation, setPopupLocation] = React.useState("");

    function popupNavigation(e) {
        let location = e.target.id;
        setPopupShow(true);
        setPopupLocation(location);
    }

    return (
        <Router>
            <div id="wrapper-left"></div>
            <div id="container">
                <Header title="Spelare" />
                <Nav authToken="W.I.P" popupNav={popupNavigation} />
                <div id="mainContent">
                    <Popup show={popupShow} location={popupLocation} setShow={setPopupShow} />
                    <Switch>
                        <Route path="/players"><Players /></Route>
                        <Route path="/matches"><Matches /></Route>
                        <Route><Redirect to="/players" /></Route>
                    </Switch>
                </div>
                <Footer />
            </div>
            <div id="wrapper-right"></div>
        </Router>
    );
}