import React from 'react'

const EventProps = () => {

    const HandleWelcomeUser=(user)=>{
        alert(`Hii, ${user}`)
    }
    const handleHover=(user)=>{
        alert("Thanks for Hovering me!")
    }
  return (
    <>
    <h1>Event Props</h1>
    <WelcomeUser
    onclick={()=>HandleWelcomeUser("Vinod")}
    onMouseEnter={handleHover}
    />
    
    </>
  )
}
const WelcomeUser=(props)=>{
    const handleGreetings=()=>{
        console.log("Hey User! Welcome")
        props.onclick()
    }
    return(
        <>
        <button onClick={props.onclick}>Click</button>
        <button onMouseEnter={props.onMouseEnter}>Hover</button>
        <button onClick={handleGreetings}>Greetings</button>
        </>
    )
}

export default EventProps