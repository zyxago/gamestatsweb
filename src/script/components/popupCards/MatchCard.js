import React from "react";
import { getMatches, addMatch, editMatch, removeMatch, Match } from "../../logic/match";


async function fetchMatches(setMatches) {
    let data = await getMatches();
    setMatches(data);
}

export function AddMatchCard({ clickHandler }) {
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
            <button>Lägg till match</button>
        </form>
    )
}

export function RemoveMatchCard({ clickHandler }) {
    let matches = [];
    fetchMatches(matches);
    return (
        <form>
            <p><label htmlFor="id">Match id:</label>
                <input type="number" min="1" max="10" name="id" /></p>
            <p>Spelare 1: Erik</p>
            <p>Sets vunna: 3</p>
            <p>Spelare 2: Hilding</p>
            <p>Sets vunna: 0</p>
            <p>Typ: Bo5</p>
            <button>Ta bort</button>
        </form>
    )
}

export function EditMatchCard({ clickHandler }) {
    let [formContent, setFormContent] = React.useState(undefined);
    let [matches, setMatches] = React.useState(undefined);
    if (matches === undefined) {
        fetchMatches(setMatches);
    }

    function constructFormContent(id) {
        let match = matches.find((match) => match.gameId == id);
        let content = [
            <p>
                <label htmlFor="cardHomeTeam">Spelare 1:</label>
                <input id="cardHomeTeam" type="text" value={match.homeTeam} />
            </p>,
            <p>
                <label htmlFor="cardScoreHome">Poäng hemma:</label>
                <input id="cardScoreHome" type="number" value={match.homeScore} />
            </p>,
            <p>
                <label htmlFor="cardAwayTeam">Spelare 2:</label>
                <input id="cardAwayTeam" type="text" value={match.awayTeam} />
            </p>,
            <p>
                <label htmlFor="cardScoreAway">Poäng borta:</label>
                <input id="cardScoreAway" type="number" value={match.awayScore} />
            </p>,
            <p>
                <label htmlFor="cardType">Typ:</label>
                <input id="cardType" type="text" value={match.type} />
            </p>
        ];
        setFormContent(content);
    }

    function submitMatch() {
        let match = new Match();
        match.gameId = document.getElementById("cardMatchId").value;
        match.homeTeam = document.getElementById("cardHomeTeam").value;
        match.awayTeam = document.getElementById("cardAwayTeam").value;
        match.homeScore = document.getElementById("cardScoreHome").value;
        match.homeScore = document.getElementById("cardScoreAway").value;
        match.type = document.getElementById("cardType").value;
        editMatch(match);
    }

    function matchIds() {
        let options = matches.map((match) => <option>{match.gameId}</option>);
        return options;
    }

    return (
        <div>
            {matches && <form onSubmit={(e) => e.preventDefault()}>
                <p>
                    <label htmlFor="id">Match id</label>
                    <select id="cardMatchId" onChange={(e) => constructFormContent(e.target.value)}>{matchIds()}</select>
                </p>
                {formContent === undefined && constructFormContent()}
                <button onClick={() => submitMatch()}>Redigera</button>
            </form>}
        </div>
    )

}