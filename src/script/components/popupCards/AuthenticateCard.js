import React from "react";
import { getAuthToken } from "../../logic/authenticate";

export function LoginCard(props) {

    async function setToken(){
        let uname = document.getElementById("username");
        let upass = document.getElementById("password");
        let token = getAuthToken(uname, upass);
        props.setToken(token);
    }

    return (
        <form>
            <p><lable htmlFor="username">Namn</lable>
                <input id="username" type="text" name="username" /></p>
            <p><label htmlFor="password">Lösenord</label>
                <input id="password" type="password" name="password" /></p>
            <button onClick={setToken}>Logga in</button>
        </form>
    )
}

export function LogoutCard(props) {

    function unsetToken(){
        props.unsetToken("");
    }

    return (
        <form>
            <button onClick={unsetToken}>Logga ut</button>
        </form>
    )
}