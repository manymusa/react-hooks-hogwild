import React from "react";

function ExtraCardContent({ hog }) {

    return (
        <div class="extra content">
            <span>specialty: {hog.specialty} weight: {hog.weight} gressed: {hog.gressed} Medal: {hog["highest medal achieved"]} </span>
        </div>
    )
}

export default ExtraCardContent