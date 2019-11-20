import React from "react";


export function AddTeamCard({clickHandler}) {
    return (
        <form>
            <p><label htmlFor="name">Namn</label>
                <input type="text" name="name" /></p>
            <button onClick={()=>clickHandler}>Lägg till</button>
        </form>
    )
}

export function RemoveTeamCard({clickHandler, teams}) {

    return (
        <form>
            <p><label htmlFor="name">Namn</label>
                <input type="text" name="name"/></p>
            <p>Matcher spelade: 1</p>
            <button>Ta bort</button>
        </form>
    )
}

export function EditTeamCard({clickHandler, teams}) {
    return (
        <form>
            <p>Namn: Erik</p>
            <p><label htmlFor="name">Nytt namn:</label>
                <input type="text" name="name" /></p>
            <button>Redigera</button>
        </form>
    )
}