import React from "react";
import ScoreBoard from "./ScoreBoard";

export default function Header(props) {
    return (
        <header>
            <div className="title">
                <h1>UFC Legends Memory Game</h1>
                <h4>Earn points by clicking on an image but you can only click once!</h4>
            </div>
            <ScoreBoard 
                currentScore={props.currentScore}
                highestScore={props.highestScore}
            />
        </header>
    );
};