import React from "react";


export function AddTeamCard() {
    return (
        <form>
            <p><label htmlFor="name">Namn</label>
                <input type="text" name="name" /></p>
            <button>Lägg till</button>
        </form>
    )
}

export function RemoveTeamCard({ clickHandler, teams }) {
    let team;

    function displayTeams(teams) {
        return teams.map(() => {
            return(
            <option>{team.name}</option>
            )
        })
    }

    return (
        <form>
            <p><label htmlFor="name">Namn</label>
                <section>
                    {displayTeams(teams)}
                </section>
            </p>
            <p>Matcher spelade: 1</p>
            <button onClick={() => clickHandler(team)}>Ta bort</button>
        </form>
    )
}

export function EditTeamCard() {
    return (
        <form>
            <p>Namn: Erik</p>
            <p><label htmlFor="name">Nytt namn:</label>
                <input type="text" name="name" /></p>
            <button>Redigera</button>
        </form>
    )
}