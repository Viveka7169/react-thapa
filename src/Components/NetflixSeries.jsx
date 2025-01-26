import React from "react"
import seriesData from "../api/seriesData.json"
const NetflixSeries=()=>{
console.log(seriesData);
    return(
        <ul>
        <h1>Netflix Series</h1>
        {
            seriesData.map((currData)=>{
                return(
                    <li key={seriesData.id}>
                        <img src={currData.img_url} alt={currData.name} width="40%" height="40%" />
                        
                        <p>Name:{currData.name}</p>
                        <p>Rating:{currData.rating}</p>
                        <p>Summery:{currData.description}</p>
                        <p>Genere:{currData.genre}</p>
                        <p>Cast:{currData.cast}</p>
                        <a href={currData.watch_url}>
                            <button>Watch Now</button>
                        </a>


                    </li>
                )
            })
        }

        
        
        </ul>

    )
}
export default NetflixSeries