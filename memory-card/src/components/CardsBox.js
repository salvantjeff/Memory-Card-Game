import React from "react";

function CardsBox(props) {
    const cards = props.newCards;
    return (
        <div className="cards">
            {props.buildOrder.map(c => 
                <div 
                    key={c} data-id={`${c}`} 
                    className="card"
                >
                    <div className="img-frame" data-id={`${c}`}>
                        <img src="#" alt="#" data-id={`${c}`}/>
                    </div>
                    <div 
                        className={"description-box"} 
                        data-id={`${c}`}
                        onClick={() => {
                            props.handleClick(c);
                        }}
                    >
                        <p className="description" data-id={`${c}`}>
                            {cards[c].description}
                        </p>
                    </div>
                </div>
            )} 
        </div>
    )
}

export default CardsBox;