import React from "react";
import { getTeams, editTeam, Team } from "../../../logic/team";

async function fetchTeams(setTeams) {
    let data = await getTeams();
    setTeams(data);
}

export default function EditTeamCard({ authToken, update}) {

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
        let team = new Team();
        team.id = teams.find((team) => team.name === document.getElementById("cardTeamOldNames").value).id;
        team.name = document.getElementById("cardTeamName").value;
        editTeam(team, authToken);
        update();
    }

    return (
        <div>
            {teams && <form onSubmit={(e) => e.preventDefault()}>
                <p>
                    <label htmlFor="cardTeamOldNames">Lag: </label>
                    <select id="cardTeamOldNames" onChange={(e) => constructContent(e.target.value)}>{teamNames()}</select>
                </p>
                {content}
                <p>
                    <label htmlFor="cardTeamName">Nytt namn: </label>
                    <input type="text" id="cardTeamName" />
                </p>
                <button onClick={submitTeam}>Redigera</button>
            </form>}
        </div>

    )
}