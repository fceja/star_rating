<<<<<<< HEAD

=======
>>>>>>> f0a4d0ed951460bc4bd46ffc858f8527308a1fc0
import React from "react";
import {FaStar} from "react-icons/fa";


<<<<<<< HEAD
export default function Star ({index, selected= false, onSelect = f => f }) {    // const starClassName= "star-" + index
    const starClassName= `star-${index}`

    return(
        <div className= {starClassName} >
            <FaStar color={selected ? "red" : "grey"} onClick={onSelect}/>
        </div>
    );
} 
=======
export default function Star ({selected= false, onSelect = f => f }) {    // const starClassName= "star-" + index
    return(
        <FaStar color={selected ? "red" : "grey"} onClick={onSelect}/>
    );
}
>>>>>>> f0a4d0ed951460bc4bd46ffc858f8527308a1fc0
