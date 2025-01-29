import React from 'react'
import {useState} from "react"
const UseState = () => {
    const[count,setCount]=useState(0)
    const handleIncrement=()=>{
        setCount(()=>count+1)
    }
    const handleDecrement=()=>{
        setCount(()=>count-1)
    }
  
    return (
    <>
    <h1>{count}</h1>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default UseState