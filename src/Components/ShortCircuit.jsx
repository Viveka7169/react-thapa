import React, { useState } from 'react'

const ShortCircuit = () => {
    const [isloggedIn,setisLoggedIn]=useState(false)
    const [user,setUser]=useState("")
    
  return (
    <>
    <h1>User</h1>

   {isloggedIn && <p>You are Logged In!</p>}

   {/* ***********Another Example************** */}
   {user ? `Hello ${user}`:"Please Logged In"}
    <button onClick={()=>setisLoggedIn(!isloggedIn)}>Toggle Login State</button>
    <button onClick={()=>setUser("Vivek")}>Set User</button>
    <button onClick={()=>setUser("")}>Clear User</button>
    
    </>
  )
}

export default ShortCircuit