import React from "react";
import ScoreBoard from "./ScoreBoard";

export default function Header(props) {
    return (
        <header>
            <div className="title">
                <h1>UFC Legends Memory Game</h1>
            </div>
            <ScoreBoard 
                currentScore={props.currentScore}
                highestScore={props.highestScore}
            />
        </header>
    );
};