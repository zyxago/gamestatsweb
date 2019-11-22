import React from "react";
import { getMatches, removeMatch } from "../../../logic/match";

async function fetchMatches(setMatches) {
    let data = await getMatches();
    setMatches(data);
}

export default function RemoveMatchCard({ authToken, update}) {

    let [content, setContent] = React.useState(undefined);
    let [matches, setMatches] = React.useState(undefined);
    if (matches === undefined) {
        fetchMatches(setMatches);
    }

    function constructContent(id) {
        let match = matches.find((match) => match.gameId == id);
        let content = [
            <p key="cardMatchHomeTeam">Hemma lag: {match.homeTeam}</p>,
            <p key="cardMatchHomeScore">Poäng hemma: {match.homeScore}</p>,
            <p key="cardMatchAwayTeam">Borta lag: {match.awayTeam}</p>,
            <p key="cardMatchAwayScore">Poäng borta: {match.awayScore}</p>
        ];
        setContent(content);
    }

    function submitMatch() {
        let id = document.getElementById("cardMatchId").value;
        removeMatch(id, authToken);
        update();
    }

    function matchIds() {
        return matches.map((match) => <option key={`match${match.gameId}`}>{match.gameId}</option>);
    }

    return (
        <div>
            {matches && <form onSubmit={(e) => e.preventDefault()}>
                <p>
                    <label htmlFor="cardMatchid">Match id: </label>
                    <select id="cardMatchId" onChange={(e) => constructContent(e.target.value)}>{matchIds()}</select>
                </p>
                {content}
                <button onClick={submitMatch}>Ta bort</button>
            </form>}
        </div>
    )
}