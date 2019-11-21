import React from "react";
import { getTeams, removeTeam} from "../../../logic/team";

async function fetchTeams(setTeams) {
    let data = await getTeams();
    setTeams(data);
}

export default function RemoveTeamCard({ authToken }) {

    let [content, setContent] = React.useState(undefined);
    let [teams, setTeams] = React.useState(undefined);
    if (teams === undefined) {
        fetchTeams(setTeams);
    }

    function teamNames() {
        return teams.map((team) => <option>{team.name}</option>);
    }

    function constructContent(name) {
        let team = teams.find((team) => team.name === name);
        let content = [
            <p>Matcher spelade: {team.matchesPlayed}</p>,
            <p>Vunna Matcher: {team.matchesWon}</p>,
            <p>Vunna poäng: {team.wins}</p>,
            <p>Förlorade poäng: {team.losses}</p>
        ];
        setContent(content);
    }

    function submitTeam() {
        let id = document.getElementById("cardTeamNames").value;
        removeTeam(id, authToken);
    }

    return (
        <div>
            {teams && <form onSubmit={(e) => e.preventDefault()}>
                <p>
                    <label htmlFor="cardTeamNames">Namn: </label>
                    <select onChange={(e) => constructContent(e.target.value)} id="cardTeamNames">{teamNames()}</select>
                </p>
                {content}
                <button onClick={submitTeam}>Ta bort</button>
            </form>}
        </div>

    )
}