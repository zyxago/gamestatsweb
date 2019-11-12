import React from "react";
import { Link } from "react-router-dom";
import {verifyAuthentication} from "../authenticate";
import "../../css/Nav.css";

export default function Nav({ authToken }) {
    return (
        <nav>
            <ul>
                <li><Link to="/players">Spelare</Link></li>
                <li><Link to="/games">Matcher</Link></li>
                {verifyAuthentication(authToken) && showAdminOptions()}
            </ul>
        </nav>
    )


    function showAdminOptions() {
        let links = [];
        let path = window.location.pathname;
        console.log(path);
        switch (path) {
            case "/players/playername":
                links.push(<li>Lägg till match</li>)
                links.push(<li>Ta bort match</li>)
                links.push(<li>Redigera match</li>)
                links.push(<li>Ta bort spelare</li>)
                links.push(<li>Redigera Spelare</li>)
                break;
            case "/games/1":
                links.push(<li>Ta bort match</li>)
                links.push(<li>Redigera match</li>)
                break;
            case "/players":
                links.push(<li onClick={(e)=>console.log(e.target)}>Lägg till spelare</li>)
                links.push(<li onClick={(e)=>console.log(e.target)}>Ta bort spelare</li>)
                links.push(<li onClick={(e)=>console.log(e.target)}>Redigera Spelare</li>)
                break;
            case "/games":
                links.push(<li>Lägg till match</li>)
                links.push(<li>Ta bort match</li>)
                links.push(<li>Redigera match</li>)
                break;
            default:
                break;
        }
        links.push(<li onClick={(e)=>console.log(e.target)}>Logga ut</li>);
        return links;
    }
}