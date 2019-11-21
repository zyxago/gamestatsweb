import React from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Modal, Content } from 'react-bulma-components';
import LogoutCard from "./popupCards/AuthCards/Logout";
import LoginCard from "./popupCards/AuthCards/Login";
import RemoveTeamCard from "./popupCards/TeamCards/RemoveTeam";
import EditTeamCard from "./popupCards/TeamCards/EditTeam";
import AddTeamCard from "./popupCards/TeamCards/AddTeam";
import AddMatchCard from "./popupCards/MatchCards/AddMatch";
import RemoveMatchCard from "./popupCards/MatchCards/RemoveMatch";
import EditMatchCard from "./popupCards/MatchCards/EditMatch";

export default function Popup({ show, location, setShow, setAuthToken, authToken }) {

    let title;
    let content;

    function setCard(location) {
        switch (location) {
            case "login":
                title = "Logga in";
                content = <LoginCard setToken={setAuthToken} />;
                break;
            case "logout":
                title = "Logga ut";
                content = <LogoutCard unsetToken={setAuthToken} />;
                break;
            case "editMatch":
                title = "Redigera Match";
                content = <EditMatchCard authToken={authToken} />;
                break;
            case "addMatch":
                title = "Lägg till match";
                content = <AddMatchCard authToken={authToken} />;
                break;
            case "removeMatch":
                title = "Ta bort match";
                content = <RemoveMatchCard authToken={authToken} />;
                break;
            case "editTeam":
                title = "Redigera team";
                content = <EditTeamCard authToken={authToken} />;
                break;
            case "addTeam":
                title = "Lägg till team";
                content = <AddTeamCard authToken={authToken} />
                break;
            case "removeTeam":
                title = "Ta bort team";
                content = <RemoveTeamCard authToken={authToken} />
                break;
            default:
                break;
        }
    }

    setCard(location);

    return (
        <Modal show={show} onClose={() => setShow(false)} closeOnBlur={true}>
            <Modal.Card>
                <Modal.Card.Head onClose={() => setShow(false)}>
                    <Modal.Card.Title>{title}</Modal.Card.Title>
                </Modal.Card.Head>
                <Modal.Card.Body>
                    <Content>
                        {content}
                    </Content>
                </Modal.Card.Body>
                <Modal.Card.Foot />
            </Modal.Card>
        </Modal>
    )
}