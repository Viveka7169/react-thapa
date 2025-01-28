import React from "react"
import seriesData from "../api/seriesData.json"
import NetflixCard from "./NetflixCard";
const NetflixSeries=()=>{
// console.log(seriesData);
    return(
        <ul>
        <h1>Netflix Series</h1>
        {
            seriesData.map((currData)=>{
                return(
                   <NetflixCard key={currData.id} data={currData}/>
                )
            })
        }

        
        
        </ul>

    )
}
export default NetflixSeries