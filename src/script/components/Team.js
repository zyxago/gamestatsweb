import React from "react";
import { Table, Card } from "react-bulma-components";
import { getTeamMatches } from "../logic/match";

export default function Team({ team, lastChange, setTitle}) {
    let [stats, setStats] = React.useState(undefined);
    let [matches, setMatches] = React.useState(undefined);
    React.useEffect(()=>{getContent()}, [lastChange])

    setTitle(`Spelare-${team.name}`);

    async function getContent() {
        const matches = await getTeamMatches(team.id);
        let JSXmatches = matches.map((match) => {
            return (
                <tr key={match.gameId}>
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
                <p>Procent Vunna Matcher: {Math.round((matches.filter((match) => { return match.winner === team.name }).length / matches.length) * 100)}%</p>
                <p>Matcher Spelade: {matches.length}</p>
                <p>Procent Vunna Sets: {setsWinrate(matches, setsPlayed, team.name)}%</p>
                <p>Antal Sets Spelade: {setsPlayed}</p>
            </Card.Content>
        )

        function calcSetsPlayed(matches, teamName) {
            let setsPlayed = 0;
            matches.map((match) => setsPlayed += match.homeScore + match.awayScore)
            return setsPlayed;
        }

        function setsWinrate(matches, setsPlayed, teamName) {
            let wonSets = 0;
            for (const match of matches) {
                if (match.winner === teamName) {
                    if (match.homeTeam === teamName) {
                        wonSets += match.homeScore;
                    }
                    else {
                        wonSets += match.awayScore;
                    }
                }
            }
            return Math.round((wonSets / setsPlayed) * 100);
        }
        setStats(stats)
        setMatches(JSXmatches);

    }

    return (
        <main>
            <Table>
                <caption>Matcher spelade</caption>
                <thead>
                    <tr>
                        <th>Hemma lag</th>
                        <th>Borta lag</th>
                        <th>Typ</th>
                        <th>Totala Mängden Poäng</th>
                        <th>Vunna Poäng</th>
                        <th>Förlorade Poäng</th>
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