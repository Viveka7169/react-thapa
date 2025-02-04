import React, { useEffect, useState } from 'react'

const Pokemon = () => {
    const [pokemon,setPokemon]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)
    const API='https://pokeapi.co/api/v2/pokemon/pikachu'
    useEffect(()=>{
        fetch(API)
        .then((res)=>res.json())
        .then((data)=>{
            setPokemon(data)
            setLoading(false)
        })
       
        .catch((err)=>{
            setError(err)
            setLoading(false)
        }
        )

    },[])
    console.log(pokemon);
    if(loading){
        return(
            <div>
                <h1>Loading.....</h1>
            </div>
        )
    }
    if(error)
    
    return(
        <div>
            <h1>{error.message}</h1>
        </div>
    )    

  return (
   <>
   <section>
    <header>
        <h1>Lets Catch Pokemon</h1>
    </header>
    <ul>
        <li>
            <figure>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
            </figure>
            <h1>{pokemon.name}</h1>

        </li>
        <p>Height: <span>{pokemon.weight}</span></p>
        <p>Weight: <span>{pokemon.weight}</span></p>
        <p>Speed: <span>{pokemon.stats[5].base_stat}</span></p>
        
    </ul>
   </section>
   </>
  )
}

export default Pokemon