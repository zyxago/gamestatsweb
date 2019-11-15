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
            <input onClick={setToken} type="submit" value="Logga in" />
        </form>
    )
}

export function LogoutCard(props) {

    function unsetToken(){
        props.unsetToken("");
    }

    return (
        <form>
            <input onClick={unsetToken} type="submit" value="Logga ut" />
        </form>
    )
}