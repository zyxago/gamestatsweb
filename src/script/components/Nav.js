import React from "react";
import { Link } from "react-router-dom";
import { verifyAuthentication } from "../logic/authenticate";
import "../../css/Nav.css";

export default function Nav({ authToken, popupNav }) {
    return (
        <nav>
            <ul>
                <li><Link to="/players">Spelare</Link></li>
                <li><Link to="/matches">Matcher</Link></li>
                {verifyAuthentication(authToken) ? showAdminOptions() : <li onClick={(e) => console.log(e.target)}>Logga In</li>}
            </ul>
        </nav>
    )


    function showAdminOptions() {
        let links = [];
        let path = window.location.pathname;
        console.log(path);
        switch (path) {
            case "/players/playername":
                links.push(<li id="addMatch" onClick={popupNav}>Lägg till match</li>)
                links.push(<li id="removePlayer" onClick={popupNav}>Ta bort spelare</li>)
                links.push(<li id="editPlayer" onClick={popupNav}>Redigera Spelare</li>)
                break;
            case "/players":
                links.push(<li id="addPlayer" onClick={popupNav}>Lägg till spelare</li>)
                break;
            case "/matches":
                links.push(<li id="addMatch" onClick={popupNav}>Lägg till match</li>)
                break;
            default:
                break;
        }
        links.push(<li id="removeMatch" onClick={popupNav}>Ta bort match</li>)
        links.push(<li id="editMatch" onClick={popupNav}>Redigera match</li>)
        links.push(<li id="logout" onClick={popupNav}>Logga Ut</li>);
        return links;
    }
}