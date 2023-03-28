import Star from "./Star"
import React, {useState} from "react";
import CreateArray from "./CreateArray"


export default function StarRating({totalStars}){
    const [selectedStars, setSelectedStars] = useState(0);

    return(
      <>
        <div className='stars-container'>
            {CreateArray({totalStars}).map((n, i) => (
            <Star
                selected={selectedStars > i}
                onSelect={() => setSelectedStars(i+1)}
            />
            ))}
        </div>
        <div className = 'stars-selected-title'>
        {selectedStars} of {totalStars} stars
        </div>
      </>
    )
  }