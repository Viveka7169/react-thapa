import axios from "axios"
const api=axios.create({
    baseURL:"http://www.omdbapi.com/"
})
export const getMovieService=()=>{
    return api.get("?i=tt3896198&apikey=ea8d1079&s=titanic&page=1")
}