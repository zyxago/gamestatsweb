import React from "react";

export function AddMatchCard() {
    return (
        <form>
            <p><label htmlFor="id">Match id:</label>
                <input type="number" min="1" max="10" name="id" /></p>
            <p> <label htmlFor="player1">Spelare 1:</label>
                <input type="text" name="player1" /></p>
            <p><label htmlFor="player2">Spelare 2:</label>
                <input type="text" name="player2" /></p>
            <p> <label htmlFor="typ">Typ:</label>
                <input type="text" name="typ" /></p>
            <p><label htmlFor="games">Sets spelade:</label>
                <input type="number" min="1" max="5" /></p>
            <p> <label htmlFor="game1">Set 1:</label>
                <input type="text" name="game1" /></p>
            <p> <label htmlFor="game2">Set 2:</label>
                <input type="text" name="game2" /></p>
            <p> <label htmlFor="game3">Set 3:</label>
                <input type="text" name="game3" /></p>
            <input type="submit" value="Lägg till match" />
        </form>
    )
}

export function RemoveMatchCard() {
    return (
        <form>
            <p><label htmlFor="id">Match id:</label>
                <input type="number" min="1" max="10" name="id" /></p>
            <p>Spelare 1: Erik</p>
            <p>Sets vunna: 3</p>
            <p>Spelare 2: Hilding</p>
            <p>Sets vunna: 0</p>
            <p>Typ: Bo5</p>
            <input type="submit" value="Ta bort" />
        </form>
    )
}

export function EditMatchCard() {
    return (
        <form>
            <p><label htmlFor="id">Match id</label>
                <input type="number" min="1" max="10" name="id" /></p>
            <p><label htmlFor="player1">Spelare 1:</label>
                <input type="text" name="player1" /></p>
            <p><label htmlFor="player2">Spelare 2:</label>
                <input type="text" name="player2" /></p>
            <p><label htmlFor="typ">Typ:</label>
                <input type="text" name="typ" /></p>
            <p><label htmlFor="games">Sets spelade:</label>
                <input type="number" min="1" max="5" /></p>
            <p><label htmlFor="game1">Set 1:</label>
                <input type="text" name="game1" /></p>
            <p><label htmlFor="game2">Set 2:</label>
                <input type="text" name="game2" /></p>
            <p><label htmlFor="game3">Set 3:</label>
                <input type="text" name="game3" /></p>
            <input type="submit" value="Redigera" />
        </form>
    )
}