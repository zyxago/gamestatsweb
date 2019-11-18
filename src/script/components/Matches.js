import React from "react";
import "../../css/Matches.css";
import { getMatches } from "../logic/match";
import { Table } from "react-bulma-components";
import Match from "./Match";
import {
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";

export default function Matches({setCurrentpage}) {

    let [clickedMatch, setClickedMatch] = React.useState(undefined);
    let [tableContent, setTableContent] = React.useState(undefined);
    if (tableContent === undefined) {
        getContent(setTableContent);
    }

    function navigateToMatch(match){
        setClickedMatch(match);
        setCurrentpage(`matches/${match.gameId}`);
    }

    //Gets matchTables content from DB
    async function getContent(setTableContent) {
        const matches = await getMatches();
        const matchTable = matches.map((match) => {
            return (
                <tr key={match.gameId}>
                    <td><Link onClick={() => navigateToMatch(match)} to={`matches/${match.gameId}`}>{match.gameId}</Link></td>
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

    //Display all matches
    function matchTable(){
        return (
            <main>
                <Table>
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
                </Table>
                <div>
                    <p>Antal matcher spelade: {tableContent && tableContent.length}</p>
                </div>
            </main>
        )
    }

    return (
        <Switch>
            <Route exact path="/matches">{matchTable}</Route>
            {clickedMatch && <Route path="/matches/"><Match match={clickedMatch} /></Route>}
            <Route><Redirect to="/matches"/></Route>
        </Switch>
    )
}