import React from "react";
import images from "../images";

function CardsBox(props) {
    const cards = props.newCards;
    return (
        <div className="cards">
            {props.buildOrder.map((c, i) => 
                <div 
                    key={c} data-id={`${c}`} 
                    className="card"
                >
                    <div className="img-frame" data-id={`${c}`}>
                        <img src={images[i]} alt="#" data-id={`${c}`}/>
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