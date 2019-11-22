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

export default function Matches({setCurrentpage, setTitle, lastChange}) {

    let [clickedMatch, setClickedMatch] = React.useState(undefined);
    let [tableContent, setTableContent] = React.useState(undefined);
    React.useEffect(()=>{getContent()}, [lastChange]);

    setTitle("Matcher");

    function navigateToMatch(match){
        setClickedMatch(match);
        setCurrentpage(`matches/${match.gameId}`);
    }

    //Gets matchTables content from DB
    async function getContent() {
        const matches = await getMatches();
        const matchTable = matches.map((match) => {
            return (
                <tr key={match.gameId}>
                    <td><Link onClick={() => navigateToMatch(match)} to={`matches/${match.gameId}`}>{match.gameId}</Link></td>
                    <td>{match.homeTeam}</td>
                    <td>{match.awayTeam}</td>
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
                            <th>Hemma</th>
                            <th>Borta</th>
                            <th>Poäng Hemma</th>
                            <th>Poäng Borta</th>
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
            {clickedMatch && <Route path="/matches/"><Match match={clickedMatch} setTitle={setTitle}/></Route>}
            <Route><Redirect to="/matches"/></Route>
        </Switch>
    )
}