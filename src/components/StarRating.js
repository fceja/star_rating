<<<<<<< HEAD
=======
import '../styles/StarRating.css'

>>>>>>> f0a4d0ed951460bc4bd46ffc858f8527308a1fc0
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
                key={i}
<<<<<<< HEAD
                index = {i}  
=======
>>>>>>> f0a4d0ed951460bc4bd46ffc858f8527308a1fc0
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