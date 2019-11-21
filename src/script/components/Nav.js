import React from "react";
import { Link } from "react-router-dom";
import { verifyAuthentication } from "../logic/authenticate";
import "../../css/Nav.css";

export default function Nav({ authToken, popupNav, currentPage, setCurrentPage, setTitle }) {

    let [authVerification, setAuthVerification] = React.useState(undefined);
    verifyAuthentication(authToken, setAuthVerification);
    
    function changePage(page, title) {
        setCurrentPage(page);
        setTitle(title);
    }

    console.log("auth verification: " + authVerification);

    return (
        <nav>
            <ul>
                <li key="teams" ><Link onClick={() => changePage("teams", "Lag")} to="/teams">Spelare</Link></li>
                <li key="matches" ><Link onClick={() => changePage("matches", "Matcher")} to="/matches">Matcher</Link></li>
                {authVerification ? showAdminOptions(currentPage) : <li key="login" id="login" onClick={popupNav}>Logga In</li>}
            </ul>
        </nav>
    )


    function showAdminOptions(currentPage) {
        let links = [];
        if (/(teams)$/.test(currentPage)) {
            links.push(<li key="addTeam" id="addTeam" onClick={popupNav}>Lägg till spelare</li>)
        } else if (/(teams)\/[0-9]+$/.test(currentPage)) {
            links.push(<li key="addMatch" id="addMatch" onClick={popupNav}>Lägg till match</li>)
            links.push(<li key="removeTeam" id="removeTeam" onClick={popupNav}>Ta bort spelare</li>)
            links.push(<li key="editTeam" id="editTeam" onClick={popupNav}>Redigera Spelare</li>)
        }
        else if (/(matches)$/.test(currentPage)) {
            links.push(<li key="addMatch" id="addMatch" onClick={popupNav}>Lägg till match</li>)
        } else if (/(matches)\/[0-9]+$/.test(currentPage)) {

        }
        links.push(<li key="removeMatch" id="removeMatch" onClick={popupNav}>Ta bort match</li>)
        links.push(<li key="editMatch" id="editMatch" onClick={popupNav}>Redigera match</li>)
        links.push(<li key="logout" id="logout" onClick={popupNav}>Logga Ut</li>);
        return links;
    }

}