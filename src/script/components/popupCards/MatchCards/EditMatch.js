import React from "react";
import { getMatches, editMatch, Match } from "../../../logic/match";
import { getTeams } from "../../../logic/team";

async function fetchMatches(setMatches) {
    let data = await getMatches();
    setMatches(data);
}
async function fetchTeams(setTeams) {
    let data = await getTeams();
    setTeams(data);
}

export default function EditMatchCard({ authToken, update }) {

    let [content, setContent] = React.useState(undefined);
    let [matches, setMatches] = React.useState(undefined);
    let [teams, setTeams] = React.useState(undefined);
    if (matches === undefined && teams === undefined) {
        fetchMatches(setMatches);
        fetchTeams(setTeams);
    }

    console.log(content);

    function constructContent(id) {

        function teamNames() {
            return teams.map((team) => <option key={`team${team.id}`}>{team.name}</option>);
        }

        let match = matches.find((match) => match.gameId == id);
        let content = [
            <p key="homeTeam">
                <label htmlFor="cardHomeTeam">Hemma lag: </label>
                <select id="cardHomeTeam" type="text" defaultValue={match.homeTeam}>{teamNames()}</select>
            </p>,
            <p key="homeScore">
                <label htmlFor="cardScoreHome">Poäng hemma: </label>
                <input id="cardScoreHome" type="number" defaultValue={match.homeScore} />
            </p>,
            <p key="awayTeam">
                <label htmlFor="cardAwayTeam">Borta lag: </label>
                <select id="cardAwayTeam" type="text" defaultValue={match.awayTeam}>{teamNames()}</select>
            </p>,
            <p key="awayScore">
                <label htmlFor="cardScoreAway">Poäng borta: </label>
                <input id="cardScoreAway" type="number" defaultValue={match.awayScore} />
            </p>
        ];
        setContent(content);
    }

    function submitMatch() {
        let match = new Match();
        match.homeId = teams.find((team) => team.name === document.getElementById("cardHomeTeam").value).id;
        match.awayId = teams.find((team) => team.name === document.getElementById("cardAwayTeam").value).id;
        match.homeScore = document.getElementById("cardScoreHome").value;
        match.awayScore = document.getElementById("cardScoreAway").value;
        match.scoreId = matches.find((match) => match.gameId == document.getElementById("cardMatchId").value).scoreId;
        editMatch(match, authToken);
        update();
    }

    function matchIds() {
        return matches.map((match) => <option key={`match${match.gameId}`}>{match.gameId}</option>);
    }

    return (
        <div>
            {matches && <form onSubmit={(e) => e.preventDefault()}>
                <p>
                    <label htmlFor="cardMatchId">Match id: </label>
                    <select id="cardMatchId" onChange={(e) => constructContent(e.target.value)}>{matchIds()}</select>
                </p>
                {content}
                <button onClick={submitMatch}>Redigera</button>
            </form>}
        </div>
    )
}