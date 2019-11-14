import React from "react";
import "../../css/Players.css";

export default function Players() {
    return (
        <main>
            {getPlayers()}
        </main>
    )

    function getPlayers() {
        return (
            <div id="players">
                <table id="playerTable">
                    <thead>
                        <tr>
                            <th>Spelare</th>
                            <th>Spelade Matcher</th>
                            <th>Vunna Matcher</th>
                            <th>Förlorade Matcher</th>
                            <th>Vinstfrekvens</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Erik</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <td>Hilding</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0%</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        )
    }
}