import React from "react";
import {Table} from "react-bulma-components";

export default function Match({match}){
    return (
        <main>
            <Table>
                <thead>
                    <tr>
                        <th>Spelare</th>
                        <th>Sets Vunna</th>
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