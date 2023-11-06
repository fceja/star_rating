<<<<<<< HEAD

import './App.css';
=======
import './styles/App.css';
>>>>>>> f0a4d0ed951460bc4bd46ffc858f8527308a1fc0
import React from "react";
import StarRating from './components/StarRating';

export default function App(){
  return(
    <div className='star-rating-container'>
      <StarRating totalStars={10}/>
    </div>
  )
}
