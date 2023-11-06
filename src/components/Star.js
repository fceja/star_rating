
import React from "react";
import {FaStar} from "react-icons/fa";


export default function Star ({index, selected= false, onSelect = f => f }) {    // const starClassName= "star-" + index
    const starClassName= `star-${index}`

    return(
        <div className= {starClassName} >
            <FaStar color={selected ? "red" : "grey"} onClick={onSelect}/>
        </div>
    );
} 
