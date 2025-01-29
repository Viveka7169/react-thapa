import React from "react"
import seriesData from "../api/seriesData.json"
import NetflixCard from "./NetflixCard";
const NetflixSeries=()=>{
// console.log(seriesData);
    return(
        <>
        <h1>Netflix Series</h1>
        <ul className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
            seriesData.map((currData)=>{
                return(
                    <NetflixCard className="bg-white shadow-lg rounded-xl p-6" key={currData.id} data={currData}/>
                )
            })
        }

        
        
        </ul>
        </>

    )
}
export default NetflixSeries