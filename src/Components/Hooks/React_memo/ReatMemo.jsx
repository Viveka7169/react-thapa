import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ReactMemo = () => {
    const [count,setCount]=useState(0)
  return (
    <>
    <p>{count}</p>
    <button onClick={()=>setCount(count + 1)}>Increment</button>
        <ChildComponent/>
    </>
  )
}

export default ReactMemo