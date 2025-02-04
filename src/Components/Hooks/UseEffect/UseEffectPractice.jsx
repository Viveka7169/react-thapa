// import React, { useState,useEffect } from 'react'

// const UseEffectPractice = () => {
//     const [count,setCount]=useState(0)
//     useEffect(()=>{
//   console.log("Use Effcet Run",count);
//     },[count])
//   return (
//     <>
//     <p>Count:{count}</p>
//     <button onClick={()=>setCount(count + 1)}>Increment</button>
//     </>
//   )
// }

// export default UseEffectPractice

import React, { useEffect, useState } from 'react'

const UseEffectPractice = () => {
    const[count,setCount]=useState(0)
    const[name,setName]=useState("")


    useEffect(()=>{
        console.log(name);
    },[name])

    //Changing Title
    // useEffect(()=>{
    //     document.title=`Count:${count}`
    // },[count])
  return (
    <>
    <h1>Use Effect Challenge</h1>
    <p>
        Count:{count}
    </p>
    <button onClick={()=>setCount(count + 1)}>Increment</button>
    <p>
        Name:{name}
    </p>
    <input type="text" onChange={(e)=>setName(e.target.value)} />
    </>
  )
}

export default UseEffectPractice