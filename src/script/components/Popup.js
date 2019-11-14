import React from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Modal, Content } from 'react-bulma-components';

export default function Popup({ show, location, setShow }) {
    console.log(location);
    function setTitle(location) {
        let title;
        if (location === "editMatch") {
            title = "Redigera Match";
        } else if (location === "removeMatch") {
            title = "Ta bort match";
        } else if (location === "addMatch") {
            title = "Lägg till match";
        } else if (location === "editPlayer") {
            title = "Redigera spelare";
        } else if (location === "removePlayer") {
            title = "Ta bort spelare";
        } else if (location === "addPlayer") {
            title = "Lägg till spelare";
        } else if (location === "login") {
            title = "Logga in";
        } else if (location === "logout") {
            title = "Logga ut";
        }
        return title;
    }

    function setContent(location) {
        let content;
        if (location === "editMatch") {
            content = <Content>
                <form>
                    <label htmlFor="id">Match id</label>
                    <input type="number" min="1" max="10" name="id" />
                    <label htmlFor="player1">Spelare 1:</label>
                    <input type="text" name="player1" />
                    <label htmlFor="player2">Spelare 2:</label>
                    <input type="text" name="player2" />
                    <label htmlFor="typ">Typ:</label>
                    <input type="text" name="typ" />
                    <label htmlFor="games">Sets spelade:</label>
                    <input type="number" min="1" max="5" />
                    <label htmlFor="game1">Set 1:</label>
                    <input type="text" name="game1" />
                    <label htmlFor="game2">Set 2:</label>
                    <input type="text" name="game2" />
                    <label htmlFor="game3">Set 3:</label>
                    <input type="text" name="game3" />
                    <input type="submit" value="Redigera" />
                </form>
            </Content>
        } else if (location === "removeMatch") {
            content = <Content>
                <form>
                    <label htmlFor="id">Match id:</label>
                    <input type="number" min="1" max="10" name="id" />
                    <p>Spelare 1: Erik</p>
                    <p>Sets vunna: 3</p>
                    <p>Spelare 2: Hilding</p>
                    <p>Sets vunna: 0</p>
                    <p>Typ: Bo5</p>
                    <input type="submit" value="Ta bort" />
                </form>
            </Content>
        } else if (location === "addMatch") {
            content = <Content>
                <form>
                    <label htmlFor="id">Match id:</label>
                    <input type="number" min="1" max="10" name="id" />
                    <label htmlFor="player1">Spelare 1:</label>
                    <input type="text" name="player1" />
                    <label htmlFor="player2">Spelare 2:</label>
                    <input type="text" name="player2" />
                    <label htmlFor="typ">Typ:</label>
                    <input type="text" name="typ" />
                    <label htmlFor="games">Sets spelade:</label>
                    <input type="number" min="1" max="5" />
                    <label htmlFor="game1">Set 1:</label>
                    <input type="text" name="game1" />
                    <label htmlFor="game2">Set 2:</label>
                    <input type="text" name="game2" />
                    <label htmlFor="game3">Set 3:</label>
                    <input type="text" name="game3" />
                    <input type="submit" value="Lägg till match" />
                </form>
            </Content>
        } else if (location === "editPlayer") {
            content = <Content>
                <form>
                    <p>Namn: Erik</p>
                    <label htmlFor="name">Nytt namn:</label>
                    <input type="text" name="name" />
                    <input type="submit" value="Redigera" />
                </form>
            </Content>
        } else if (location === "removePlayer") {
            content = <Content>
                <form>
                    <label htmlFor="name">Namn</label>
                    <input type="text" name="name" />
                    <p>Matcher spelade: 1</p>
                    <input type="submit" value="Ta bort" />
                </form>
            </Content>
        } else if (location === "addPlayer") {
            content = <Content>
                <form>
                    <label htmlFor="name">Namn</label>
                    <input type="text" name="name" />
                    <input type="submit" value="Lägg till" />
                </form>
            </Content>
        } else if (location === "login") {
            content = <Content>
                <form>

                </form>
            </Content>
        } else if (location === "logout") {
            content = <Content>
                <form>
                    <lable htmlFor="username">Namn</lable>
                    <input type="text" name="username" />
                    <label htmlFor="password">Lösenord</label>
                    <input type="password" name="password" />
                    <input type="submit" value="Logga ut" />
                </form>
            </Content>
        }

        return content
    }

    return (
        <Modal show={show} onClose={() => setShow(false)} closeOnBlur={true}>
            <Modal.Card>
                <Modal.Card.Head onClose={() => setShow(false)}>
                    <Modal.Card.Title>{setTitle(location)}</Modal.Card.Title>
                </Modal.Card.Head>
                <Modal.Card.Body>
                    {setContent(location)}
                </Modal.Card.Body>
                <Modal.Card.Foot />
            </Modal.Card>
        </Modal>
    )
}