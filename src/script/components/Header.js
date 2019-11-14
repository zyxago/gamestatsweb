import React from "react";
import "../../css/Header.css";

export default function Header({title}){
    return (
        <header className="mainHead">
            <h1>{title}</h1>
        </header>
    )
}