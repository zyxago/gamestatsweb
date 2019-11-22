import React from "react";
import { getAuthToken } from "../../../logic/authenticate";

export default function LoginCard(props) {

    async function setToken() {
        let uname = document.getElementById("username").value;
        let upass = document.getElementById("password").value;
        let token = await getAuthToken(uname, upass);
        props.setToken(token);
        props.update();
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <p><label htmlFor="username">Namn</label>
                <input id="username" type="text" name="username" /></p>
            <p><label htmlFor="password">Lösenord</label>
                <input id="password" type="password" name="password" /></p>
            <button onClick={setToken}>Logga in</button>
        </form>
    )
}