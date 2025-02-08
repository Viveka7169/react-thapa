export const getMoviedData=async()=>{
    try {
        const response=await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ea8d1079&s=titanic&page=1")
        const data=await response.json()
        return data
        
    } catch (error) {
        console.log("Error i Fetching Data",error);
        
    }
}