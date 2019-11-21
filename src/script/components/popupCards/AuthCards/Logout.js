import React from "react";

export default function LogoutCard(props) {

    function unsetToken() {
        props.unsetToken("");
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <button onClick={unsetToken}>Logga ut</button>
        </form>
    )
}