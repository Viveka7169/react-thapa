import React, { useState } from 'react'

const LiftingStateUp = () => {
    const [inputValue,setInputValue]=useState("")
  return (
    <>
    <InputValue inputValue={inputValue} setInputValue={setInputValue}/>
    <DisplayComponent inputValue={inputValue}/>
    </>
  )
}

const InputValue=({inputValue,setInputValue})=>{
    return(
        <>
        <input type="text" placeholder='Enter Your Name' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        </>
    )
}
const DisplayComponent=({inputValue})=>{
    return(
        <>
        <h1>The input is : {inputValue}</h1>
        </>
    )
}


export default LiftingStateUp