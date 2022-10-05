import React, { useState } from "react";
import ExtraCardContent from "./ExtraCardContent";

function Card({ hog }) {
    const [extraInfo, setExtraInfo] = useState(false)
    
    function handleCardUpdate() {
        setExtraInfo(!extraInfo)
    }

    return (
        <div class="ui card" onClick={handleCardUpdate}>
            <div class="image">
                <img src={hog.image} />
            </div>
            <div class="content">
                <span>{hog.name}</span>
            </div>
            {extraInfo ? <ExtraCardContent hog={hog} /> : null}
        </div>
    )
}

export default Card