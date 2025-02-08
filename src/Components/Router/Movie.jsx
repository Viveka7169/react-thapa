import React from 'react'
import {getMoviedData} from "../../api/getMovieData"
const Movie = () => {
  

 const moviesData= getMoviedData

  console.log("Data from Movie Component",moviesData);
  return (
    <div>Movie</div>
  )
}

export default Movie