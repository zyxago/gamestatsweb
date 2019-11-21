import React from "react";
import { getTeams } from "../logic/team";
import Team from "./Team";
import {Table} from "react-bulma-components";
import {
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";
import "../../css/Team.css";

export default function Teams({setCurrentpage, setTitle}) {

    let [clickedTeam, setClickedTeam] = React.useState(undefined);
    let [tableContent, setTableContent] = React.useState(undefined);
    if (tableContent === undefined) {
        getContent(setTableContent);
    }

    function navigateToTeam(team){
        setClickedTeam(team);
        setCurrentpage(`teams/${team.id}`);
        setTitle(team.name);
    }

    //Display all teams
    function teamsTable() {
        return (
            <main>
                <Table>
                    <thead>
                        <tr>
                            <th>Spelare</th>
                            <th>Spelade Matcher</th>
                            <th>Vunna Matcher</th>
                            <th>Vinstfrekvens</th>
                            <th>Poäng Vunna</th>
                            <th>Poäng Förlorade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableContent}
                    </tbody>
                </Table>
            </main>
        )
    }

    //Gets teamTable content from DB
    async function getContent(setTableContent) {
        const teams = await getTeams();
        const teamTable = teams.map((team) => {
            return (
                <tr key={team.id}>
                    <td><Link onClick={() => navigateToTeam(team)} to={`/teams/${team.id}`}>{team.name}</Link></td>
                    <td>{team.matchesPlayed}</td>
                    <td>{team.matchesWon}</td>
                    <td>{team.matchesPlayed && Math.round((team.matchesWon / team.matchesPlayed) * 100)}%</td>
                    <td>{team.wins}</td>
                    <td>{team.losses}</td>
                </tr>
            )
        });
        setTableContent(teamTable);
    }

    return (
        <Switch>
            <Route exact path="/teams">{teamsTable}</Route>
            {clickedTeam && <Route path="/teams/"><Team team={clickedTeam} /></Route>}
            <Route><Redirect to="/teams"/></Route>
        </Switch>
    )
}