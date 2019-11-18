import React from "react";
import { Table, Card } from "react-bulma-components";
import { getTeamMatches } from "../logic/match";

export default function Team({ team }) {
    let [stats, setStats] = React.useState(undefined);
    let [matches, setMatches] = React.useState(undefined);
    if (stats === undefined || matches === undefined) {
        getContent(setStats, setMatches);
    }


    async function getContent(setStats, setMatches) {
        const matches = await getTeamMatches(team.id);
        let JSXmatches = matches.map((match) => {
            return (
                <tr>
                    <td>{match.homeTeam}</td>
                    <td>{match.awayTeam}</td>
                    <td>bo5</td>
                    <td>{match.homeScore + match.awayScore}</td>
                    <td>{team.id === match.homeId ? match.homeScore : match.awayScore}</td>
                    <td>{team.id === match.awayId ? match.homeScore : match.awayScore}</td>
                    <td>{match.winner}</td>
                    <td>{match.gameId}</td>
                </tr>
            )
        })
        let setsPlayed = calcSetsPlayed(matches, team.name)
        let stats = (
            <Card.Content>
                <p>Procent Vunna Matcher: {(matches.filter((match) => { return match.winner === team.name }).length / matches.length) * 100}%</p>
                <p>Matcher Spelade: {matches.length}</p>
                <p>Procent Vunna Sets: {setsWinrate(matches, setsPlayed, team.name)}%</p>
                <p>Antal Sets Spelade: {setsPlayed}</p>
            </Card.Content>
        )
        setStats(stats)
        setMatches(JSXmatches);

        function calcSetsPlayed(matches, teamName) {
            let setsPlayed = 0;
            matches.map((match) => {
                setsPlayed += match.homeScore + match.awayScore;
            })
            return setsPlayed;
        }

        function setsWinrate(matches, setsPlayed, teamName) {
            let wonSets = 0;
            matches.map((match) => {
                if (match.winner === teamName) {
                    if (match.homeTeam === teamName) {
                        wonSets += match.homeScore;
                    }
                    else {
                        wonSets += match.awayScore;
                    }
                }
            })
            return Math.round((wonSets / setsPlayed) * 100);
        }

    }

    return (
        <main>
            <Table>
                <caption>Matcher spelade</caption>
                <thead>
                    <tr>
                        <th>Spelare 1</th>
                        <th>Spelare 2</th>
                        <th>Typ</th>
                        <th>Sets spelade</th>
                        <th>Sets Vunna</th>
                        <th>Sets Förlorade</th>
                        <th>Vinnare</th>
                        <th>Match id</th>
                    </tr>
                </thead>
                <tbody>
                    {matches}
                </tbody>
            </Table>
            <Card>
                {stats}
            </Card>
        </main>
    )
}