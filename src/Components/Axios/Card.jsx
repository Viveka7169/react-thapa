import React from 'react'

const Card = ({data}) => {
    const {Title,Poster,Type,Year}=data
    console.log(Poster);
  return (
   <>
   <li>

   <h1>Card Component</h1>
   <img src={Poster} width="140px" height="240px" alt="" />
   <p>{Title}</p>
   <p>{Type}</p>
   <p>{Year}</p>
   </li>
   
   </>
  )
}

export default Card