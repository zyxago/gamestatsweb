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
    let [title, setTitle] = React.useState("");
    let [lastChange, setLastChange] = React.useState(0);

    //Handles whitch popup card should be displayed
    function popupNavigation(e) {
        let location = e.currentTarget.id;
        setPopupShow(true);
        setPopupLocation(location);
    }

    //When changes has been made to rows in tables this function is called to update the table information
    function updateLastChange() {
        setLastChange((oldValue) => oldValue + 1);
        setPopupShow(false);
    }

    return (
        <Router>
            <div id="wrapper-left"></div>
            <div id="container">
                <Header title={title} />
                <Nav authToken={authToken} popupNav={popupNavigation} currentPage={currentPage} setCurrentPage={setCurrentPage} setTitle={setTitle} />
                <div id="mainContent">
                    <Popup show={popupShow} location={popupLocation} setShow={setPopupShow} setAuthToken={setAuthToken} authToken={authToken} setTitle={setTitle} update={updateLastChange} />
                    <Switch>
                        <Route path="/teams"><Teams setCurrentpage={setCurrentPage} setTitle={setTitle} lastChange={lastChange} /></Route>
                        <Route path="/matches"><Matches setCurrentpage={setCurrentPage} setTitle={setTitle} lastChange={lastChange} /></Route>
                        <Route><Redirect to="/teams" /></Route>
                    </Switch>
                </div>
                <Footer />
            </div>
            <div id="wrapper-right"></div>
        </Router>
    );
}