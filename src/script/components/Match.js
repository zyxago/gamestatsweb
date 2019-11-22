import React from "react";
import {Table} from "react-bulma-components";

export default function Match({match, setTitle}){

    setTitle(`Match-${match.gameId}`);

    return (
        <main>
            <Table>
                <thead>
                    <tr>
                        <th>Spelare</th>
                        <th>Vunna Poäng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{match.homeTeam}</td>
                        <td>{match.homeScore}</td>
                    </tr>
                    <tr>
                        <td>{match.awayTeam}</td>
                        <td>{match.awayScore}</td>
                    </tr>
                </tbody>
            </Table>
        </main>
    )
}