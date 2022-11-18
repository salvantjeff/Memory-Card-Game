import React from "react";

export default function ScoreBoard(props) {
    return (
        <div className="scoreboard">
            <div className="score">Score: {props.currentScore}</div>
            <div className="best-score">Best score: {props.highestScore}</div>
        </div>
    );
};