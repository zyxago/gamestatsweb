import React from "react";
import { getTeams, removeTeam} from "../../../logic/team";

async function fetchTeams(setTeams) {
    let data = await getTeams();
    setTeams(data);
}

export default function RemoveTeamCard({ authToken, update}) {

    let [content, setContent] = React.useState(undefined);
    let [teams, setTeams] = React.useState(undefined);
    if (teams === undefined) {
        fetchTeams(setTeams);
    }

    function teamNames() {
        return teams.map((team) => <option key={`team${team.id}`}>{team.name}</option>);
    }

    function constructContent(name) {
        let team = teams.find((team) => team.name === name);
        let content = [
            <p key="cardTeamMatchesPlayed">Matcher spelade: {team.matchesPlayed}</p>,
            <p key="cardTeamMatchesWon">Vunna Matcher: {team.matchesWon}</p>,
            <p key="cardTeamWins">Vunna poäng: {team.wins}</p>,
            <p key="cardTeamLosses">Förlorade poäng: {team.losses}</p>
        ];
        setContent(content);
    }

    function submitTeam() {
        let id = teams.find((team)=> team.name === document.getElementById("cardTeamNames").value).id;
        removeTeam(id, authToken);
        update();
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