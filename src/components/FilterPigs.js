import React from "react";

function FilterPigs({greased, setGreased, weight, setWeight, alphabet, setAlphabet}){
    function handleGreasedPigs(){
        setGreased(!greased);
    }
    function handleWeightPigs(){
        setWeight(!weight);
    }
    function handleAlphabetPigs(){
        setAlphabet(!alphabet);
    }
    return (
        <div>
             <button class = "ui button" onClick={handleGreasedPigs}>Greased Pigs</button>
             <button class = 'ui button' onClick={handleAlphabetPigs}>Alphabetical Order</button>
             <button class = 'ui button' onClick={handleWeightPigs}>Weight</button>
        </div>

    )
}

export default FilterPigs