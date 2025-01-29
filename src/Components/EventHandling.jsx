import React from 'react'

const EventHandling = () => {
    const handleButtonClick=(e)=>{
        alert("Click Button Pressed")
        console.log(e.target);
    }
    const handleClick=(user)=>{
        console.log(`Hii ${user}, Welcome!`);
    }
  return (
   <>
   <h1>Event Handling</h1>
   <button onClick={handleButtonClick}>Click Me!</button>

   {/* Another Way  */}
{/* <button onClick={()=>handleButtonClick()}>Click Me 2</button> */}

{/* ******************If we want to pass arg to the funcion we have to use arrow function************ */}
   <button onClick={handleClick("Vinod") }>Click Me </button>
   </>
  )
}

export default EventHandling