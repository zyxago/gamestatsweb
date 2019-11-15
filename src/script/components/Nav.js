import React from "react";
import { Link } from "react-router-dom";
import { verifyAuthentication } from "../logic/authenticate";
import "../../css/Nav.css";

export default function Nav({authToken, popupNav }) {

    let [currentPage, setCurrentPage] = React.useState("teams");

    return (
        <nav>
            <ul>
                <li onClick={() => setCurrentPage("teams")}><Link to="/teams">Spelare</Link></li>
                <li onClick={() => setCurrentPage("matches")}><Link to="/matches">Matcher</Link></li>
                {verifyAuthentication(authToken) ? showAdminOptions(currentPage) : <li id="login" onClick={popupNav}>Logga In</li>}
            </ul>
        </nav>
    )


    function showAdminOptions(currentPage) {
        let links = [];
        switch (currentPage) {
            case "players/playername":
                links.push(<li id="addMatch" onClick={popupNav}>Lägg till match</li>)
                links.push(<li id="removeTeam" onClick={popupNav}>Ta bort spelare</li>)
                links.push(<li id="editTeam" onClick={popupNav}>Redigera Spelare</li>)
                break;
            case "teams":
                links.push(<li id="addTeam" onClick={popupNav}>Lägg till spelare</li>)
                break;
            case "matches":
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