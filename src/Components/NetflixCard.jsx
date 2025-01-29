import React from 'react'

// const NetflixCard = (props) => {
//   return (
//     <>
//      <li>
//                         <img src={props.curElement.img_url} alt={props.curElement.name} width="20%" height="20%" />
                        
//                         <p>Name:{props.curElement.name}</p>
//                         <p>Rating:{props.curElement.rating}</p>
//                         <p>Summery:{props.curElement.description}</p>
//                         <p>Genere:{props.curElement.genre}</p>
//                         <p>Cast:{props.curElement.cast}</p>
//                         <a href={props.curElement.watch_url}>
//                             <button>Watch Now</button>
//                         </a>
             

//                     </li>
//     </>
//   )
// }

// export default NetflixCard



// *****************************Another Way****************************************
const NetflixCard = ({data}) => {
    console.log(data);
    const {id,name,img_url,rating,description,genre,cast,watch_url} =data
    return (
      <>
       <li>
        <div className='p-6'>

                          <img className=' w-full' src={img_url} alt={name} width="40%" height="20%" />
        </div>
          <div className=' flex flex-col gap-6 p-6 w-full'>
                          <p className="text-xl font-semibold">Name:{name}</p>
                          <p>Rating:{rating}</p>
                          <p className="text-gray-600 mt-2">Summery:{description}</p>
                          <p>Genere:{genre}</p>
                          <p>Cast:{cast}</p>
                          <a href={watch_url}>
                              <button>Watch Now</button>
                          </a>
            </div>                
               
  
                      </li>
      </>
    )
  }
  
  export default NetflixCard