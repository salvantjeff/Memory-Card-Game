import React from "react";
import "./Modal.css";

export default function Modal(props) {
    return (
        <>
            {props.modal && (
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <h2 className="game-over_title">Game over</h2>
                    <div className="modal-buttons">
                        <button 
                            className="play-again"
                            onClick={props.playAgain}
                        >Play again?</button>
                    </div>
                </div>
            </div>
            )}
        </>
    );
};