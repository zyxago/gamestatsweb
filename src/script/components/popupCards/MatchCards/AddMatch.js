import React from "react";
import { addMatch, Match } from "../../../logic/match";
import { getTeams } from "../../../logic/team";

export default function AddMatchCard({ authToken, update }) {

    async function fetchTeams(setTeams) {
        let data = await getTeams();
        setTeams(data);
    }

    let [teams, setTeams] = React.useState(undefined);
    if (teams === undefined) {
        fetchTeams(setTeams);
    }

    function teamNames() {
        return teams.map((team) => <option key={`team${team.id}`}>{team.name}</option>);
    }

    function submitMatch() {
        let match = new Match();
        match.homeId = teams.find((team) => team.name === document.getElementById("cardHomeTeam").value).id;
        match.awayId = teams.find((team) => team.name === document.getElementById("cardAwayTeam").value).id;
        match.homeScore = document.getElementById("cardScoreHome").value;
        match.awayScore = document.getElementById("cardScoreAway").value;
        addMatch(match, authToken);
        update();
    }

    return (
        <div>
            {teams && <form onSubmit={(e) => e.preventDefault()}>
                <p>
                    <label htmlFor="cardHomeTeam">Hemma lag: </label>
                    <select id="cardHomeTeam" type="text">{teamNames()}</select>
                </p>
                <p>
                    <label htmlFor="cardAwayTeam">Borta lag: </label>
                    <select id="cardAwayTeam" type="text">{teamNames()}</select>
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
            </form>}
        </div>

    )
}