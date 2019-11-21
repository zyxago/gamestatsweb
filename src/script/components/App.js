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
import Teams from "./Teams";
import Matches from "./Matches";
import "../../css/App.css";
import Popup from "./Popup";





export default function App() {
    let [popupShow, setPopupShow] = React.useState(false);
    let [popupLocation, setPopupLocation] = React.useState("");
    let [authToken, setAuthToken] = React.useState(undefined);
    let [currentPage, setCurrentPage] = React.useState("teams");
    let [title, setTitle] = React.useState("Lag");

    function popupNavigation(e) {
        let location = e.target.id;
        setPopupShow(true);
        setPopupLocation(location);
    }

    return (
        <Router>
            <div id="wrapper-left"></div>
            <div id="container">
                <Header title={title} />
                <Nav authToken={authToken} popupNav={popupNavigation} currentPage={currentPage} setCurrentPage={setCurrentPage} setTitle={setTitle} />
                <div id="mainContent">
                    <Popup show={popupShow} location={popupLocation} setShow={setPopupShow} setAuthToken={setAuthToken} authToken={authToken} setTitle={setTitle} />
                    <Switch>
                        <Route path="/teams"><Teams setCurrentpage={setCurrentPage} setTitle={setTitle} /></Route>
                        <Route path="/matches"><Matches setCurrentpage={setCurrentPage} setTitle={setTitle} /></Route>
                        <Route><Redirect to="/teams" /></Route>
                    </Switch>
                </div>
                <Footer />
            </div>
            <div id="wrapper-right"></div>
        </Router>
    );
}