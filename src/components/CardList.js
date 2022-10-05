import React from "react";
import Card from "./Card";

function CardList({ hogs, greased, alphabet, weight }) {

    const filteredPigs = hogs.filter(hog => {
        if (greased) {
            return hog.greased === greased
        } else {
            return hog
        }
    })

    if (weight) {
        filteredPigs.sort((a, b) => a.weight - b.weight)
    }

    if (alphabet) {
        filteredPigs.sort((a, b) => {
            let fa = a.name.toLowerCase(),
                fb = b.name.toLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        })
    }

    const hogCards = filteredPigs.map(hog => {
        return <Card hog={hog} />
    })

    return (
        <div class='ui link cards'>
            {hogCards}
        </div>
    )
}

export default CardList