import React from "react";
import { Link } from "react-router-dom";
import { verifyAuthentication } from "../logic/authenticate";
import "../../css/Nav.css";
/**
 * Navigation menu
 * @param {String} authToken users authentication token
 * @param {function} popupNav a function that is called when a button that has a popupCard related to it is clicked
 * @param {String} currentPage the page the user is currently at
 * @param {function} setCurrentPage a function that will be called when user navigates
 */
export default function Nav({ authToken, popupNav, currentPage, setCurrentPage }) {

    let [authVerification, setAuthVerification] = React.useState(undefined);
    verifyAuthentication(authToken, setAuthVerification)

    function changePage(page) {
        setCurrentPage(page);
    }

    return (
        <nav>
            <ul>
                <li key="teams" ><Link onClick={() => changePage("teams")} to="/teams">Spelare</Link></li>
                <li key="matches" ><Link onClick={() => changePage("matches")} to="/matches">Matcher</Link></li>
                {authVerification ? showAdminOptions(currentPage) : <li key="login" id="login" onClick={popupNav}>Logga In</li>}
            </ul>
        </nav>
    )

    /**
     * Sets admin options to display depending on currentPage
     * @param {String} currentPage 
     */
    function showAdminOptions(currentPage) {
        let links = [];
        if (/(teams)$/.test(currentPage) || /(teams)\/[0-9]+$/.test(currentPage)) {
            links.push(<li key="addTeam" id="addTeam" onClick={popupNav}><abbr title="Lägger till en spelare">Lägg till spelare</abbr></li>);
            links.push(<li key="removeTeam" id="removeTeam" onClick={popupNav}><abbr title="Tar bort en spelare">Ta bort spelare</abbr></li>);
            links.push(<li key="editTeam" id="editTeam" onClick={popupNav}><abbr title="Redigerar en spelare">Redigera Spelare</abbr></li>);
        } else {
            links.push(<li key="addMatch" id="addMatch" onClick={popupNav}><abbr title="Lägger till en match">Lägg till match</abbr></li>);
            links.push(<li key="removeMatch" id="removeMatch" onClick={popupNav}><abbr title="Tar bort en match">Ta bort match</abbr></li>);
            links.push(<li key="editMatch" id="editMatch" onClick={popupNav}><abbr title="Redigerar en match">Redigera match</abbr></li>);
        }
        links.push(<li key="logout" id="logout" onClick={popupNav}>Logga Ut</li>);
        return links;
    }

}