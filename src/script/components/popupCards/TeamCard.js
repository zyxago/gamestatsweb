import React from "react";


export function AddTeamCard() {
    return (
        <form>
            <p><label htmlFor="name">Namn</label>
                <input type="text" name="name" /></p>
            <input type="submit" value="Lägg till" />
        </form>
    )
}

export function RemoveTeamCard() {
    return (
        <form>
            <p><label htmlFor="name">Namn</label>
                <input type="text" name="name" /></p>
            <p>Matcher spelade: 1</p>
            <input type="submit" value="Ta bort" />
        </form>
    )
}

export function EditTeamCard() {
    return (
        <form>
            <p>Namn: Erik</p>
            <p><label htmlFor="name">Nytt namn:</label>
                <input type="text" name="name" /></p>
            <input type="submit" value="Redigera" />
        </form>
    )
}