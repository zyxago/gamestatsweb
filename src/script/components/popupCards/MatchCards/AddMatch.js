import React from "react";
import { addMatch, Match } from "../../../logic/match";
import { getTeams } from "../../../logic/team";

export default function AddMatchCard({ authToken }) {

    async function fetchTeams(setTeams) {
        let data = await getTeams();
        setTeams(data);
    }

    let [teams, setTeams] = React.useState(undefined);
    if (teams === undefined) {
        fetchTeams(setTeams);
    }

    function submitMatch() {
        let match = new Match();
        match.homeId = teams.find((team) => team.name === document.getElementById("cardHomeTeam").value).id;
        match.awayId = teams.find((team) => team.name === document.getElementById("cardAwayTeam").value).id;
        match.homeScore = document.getElementById("cardScoreHome").value;
        match.awayScore = document.getElementById("cardScoreAway").value;
        addMatch(match, authToken);
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <p>
                <label htmlFor="cardHomeTeam">Hemma lag: </label>
                <input id="cardHomeTeam" type="text" />
            </p>
            <p>
                <label htmlFor="cardAwayTeam">Borta lag: </label>
                <input id="cardAwayTeam" type="text" />
            </p>
            <p>
                <label htmlFor="cardScoreHome">Poäng hemma: </label>
                <input id="cardScoreHome" type="number" />
            </p>
            <p>
                <label htmlFor="cardScoreAway">Poäng hemma: </label>
                <input id="cardScoreAway" type="number" />
            </p>
            <button onClick={submitMatch}>Lägg till match</button>
        </form>
    )
}