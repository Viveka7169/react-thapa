import React from 'react'

const Card = () => {
    const name="QOT"
    const rating="7.2"
    const returnGenere=()=>{
        const genere="RomCom"
        return genere
    }
  return (
    <>
    {/* <div style={{width:"300px"}}>

    <img src="QOT.jpg" alt="QOT.jpg" style={{ width: '300px', height: '200px', objectFit: 'cover' }}  />
    <div >
        <h2>Name:Queen of Tears</h2>
        <h3>Rating:8.2</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam corrupti velit minus neque amet commodi! Sequi magni,
             rem beatae assumenda labore quis tempore a dolores ipsa facilis! Omnis eius quo ab expedita architecto ea pariatur 
             necessitatibus! Nisi, voluptate temporibus!</p>
    </div>
    </div> */}

<div style={{width:"300px"}}>

<img src="QOT.jpg" alt="QOT.jpg" style={{ width: '300px', height: '200px', objectFit: 'cover' }}  />
<div >
    <h2>Name:{name}</h2>
    <h3>Rating:{rating}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam corrupti velit minus neque amet commodi! Sequi magni,
         rem beatae assumenda labore quis tempore a dolores ipsa facilis! Omnis eius quo ab expedita architecto ea pariatur 
         necessitatibus! Nisi, voluptate temporibus!</p>
    <p>Genere:{returnGenere()}</p>
</div>
</div>
    
    </>
  )
}

export default Card