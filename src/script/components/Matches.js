import React from "react";
import "../../css/Matches.css";

export default function Matches() {
    return (
        <main>
            {getMatches()}
        </main>
    )

    function getMatches() {
        return (
            <div id="matches">
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
                        <tr>
                            <td>1</td>
                            <td>Erik</td>
                            <td>Hilding</td>
                            <td>bo5</td>
                            <td>3</td>
                            <td>0</td>
                            <td>Erik</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <p>Antal matcher spelade: 1</p>
                </div>
            </div>
        )
    }
}