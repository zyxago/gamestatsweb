import React from "react";
import { addTeam, Team } from "../../../logic/team";


export default function AddTeamCard({ authToken }) {

    function submitTeam() {
        let team = new Team();
        team.name = document.getElementById("cardTeamName").value;
        addTeam(team, authToken);
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <p>
                <label htmlFor="cardTeamName">Namn: </label>
                <input type="text" id="cardTeamName" />
            </p>
            <button onClick={submitTeam}>Lägg till</button>
        </form>
    )
}