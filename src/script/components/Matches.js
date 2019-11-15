import React from "react";
import "../../css/Matches.css";
import { getMatches } from "../logic/match";

export default function Matches() {

    let [tableContent, setTableContent] = React.useState(undefined);
    getContent(setTableContent);
    return (
        <main id="matches">
            <table id="matchTable">
                <thead>
                    <tr>
                        <th>Match</th>
                        <th>Spelare 1</th>
                        <th>Spelare 2</th>
                        <th>Typ</th>
                        <th>Sets vunna spelare 1</th>
                        <th>Sets vunna spelare 2</th>
                        <th>Vinnare</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
            <div>
                <p>Antal matcher spelade: {tableContent && tableContent.length}</p>
            </div>
        </main>
    )

    async function getContent(setTableContent) {
        const matches = await getMatches();
        const matchTable = matches.map((match) => {
            return (
                <tr>
                    <td>{match.gameId}</td>
                    <td>{match.homeTeam}</td>
                    <td>{match.awayTeam}</td>
                    <td>bo5</td>
                    <td>{match.homeScore}</td>
                    <td>{match.awayScore}</td>
                    <td>{match.winner}</td>
                </tr>
            )
        })
        setTableContent(matchTable);
    }
}