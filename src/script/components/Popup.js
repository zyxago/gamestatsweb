import React from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Modal, Content } from 'react-bulma-components';
import { LoginCard, LogoutCard } from "./popupCards/AuthenticateCard";
import { AddTeamCard, EditTeamCard, RemoveTeamCard } from "./popupCards/TeamCard";
import { AddMatchCard, EditMatchCard, RemoveMatchCard } from "./popupCards/MatchCard";

export default function Popup({ show, location, setShow, setAuthToken}) {

    let title;
    let content;

    function setCard(location) {
        switch (location) {
            case "login":
                title = "Logga in";
                content = <LoginCard setToken={setAuthToken}/>;
                break;
            case "logout":
                title = "Logga ut";
                content = <LogoutCard unsetToken={setAuthToken}/>;
                break;
            case "editMatch":
                title = "Redigera Match";
                content = <EditMatchCard />;
                break;
            case "addMatch":
                title = "Lägg till match";
                content = <AddMatchCard />;
                break;
            case "removeMatch":
                title = "Ta bort match";
                content = <RemoveMatchCard />;
                break;
            case "editTeam":
                title = "Redigera team";
                content = <EditTeamCard />;
                break;
            case "addTeam":
                title = "Lägg till team";
                content = <AddTeamCard />
                break;
            case "removeTeam":
                title = "Ta bort team";
                content = <RemoveTeamCard />
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
                        <form>
                            {content}
                        </form>
                    </Content>
                </Modal.Card.Body>
                <Modal.Card.Foot />
            </Modal.Card>
        </Modal>
    )
}