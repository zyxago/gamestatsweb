import React from "react";
import { getTeams } from "../logic/team";
import "../../css/Team.css";

export default function Teams(props) {

    let [tableContent, setTableContent] = React.useState(undefined);
    getContent(setTableContent);
    return (
        <main id="teams">
            <table id="playerTable">
                <thead>
                    <tr>
                        <th>Spelare</th>
                        <th>Spelade Matcher</th>
                        <th>Vunna Matcher</th>
                        <th>Vinstfrekvens</th>
                        <th>Vunna sets</th>
                        <th>Förlorade sets</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        </main>
    )

    async function getContent(setTableContent) {
        const teams = await getTeams();
        const teamTable = teams.map((team) => {
            return (
                <tr>
                    <td>{team.name}</td>
                    <td>{team.matchesPlayed}</td>
                    <td>{team.matchesWon}</td>
                    <td>{team.matchesPlayed && (team.matchesWon / team.matchesPlayed) * 100}%</td>
                    <td>{team.wins}</td>
                    <td>{team.losses}</td>
                </tr>
            )
        });
        setTableContent(teamTable)
    }
}