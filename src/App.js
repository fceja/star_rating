import './App.css';
import React from "react";
import StarRating from './components/StarRating';

export default function App(){
  return(
    <div className='star-rating-container'>
      <StarRating totalStars={10}/>
    </div>
  )
}
