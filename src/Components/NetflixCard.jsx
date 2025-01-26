import React from 'react'

const NetflixCard = (props) => {
  return (
    <>
     <li>
                        <img src={props.curElement.img_url} alt={props.curElement.name} width="40%" height="40%" />
                        
                        <p>Name:{props.curElement.name}</p>
                        <p>Rating:{props.curElement.rating}</p>
                        <p>Summery:{props.curElement.description}</p>
                        <p>Genere:{props.curElement.genre}</p>
                        <p>Cast:{props.curElement.cast}</p>
                        <a href={props.curElement.watch_url}>
                            <button>Watch Now</button>
                        </a>
             

                    </li>
    </>
  )
}

export default NetflixCard