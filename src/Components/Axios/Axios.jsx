import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from './Card'
import { getMovieService } from './services/GetServiceForMovies'

const Axios = () => {
    const [apiData,setApiData]=useState([])
// ***************This is One Normal Way But Company Don't Follow This******************

    // const API="http://www.omdbapi.com/?i=tt3896198&apikey=ea8d1079&s=titanic&page=1"
    const getMoviesData=async()=>{
        try {
            const res= await getMovieService()
            console.log(res.data.Search);
            setApiData(res.data.Search)
        } catch (error) {
            console.log("Error",error.message);
            console.log("Error",error.response.status);
            console.log("Error",error.response.data);
        }
        
    }
    useEffect(()=>{
        getMoviesData()
    },[])
    
  return (
    <>
    <h1>Axios</h1>
    <ul className=" grid grid-cols-4">
            {
                apiData.map((curEle)=>{
                    return(
                            <Card data={curEle} key={curEle.imdbID}/>
                        )
                    })
                }
        </ul>
    </>
  )
}

export default Axios
