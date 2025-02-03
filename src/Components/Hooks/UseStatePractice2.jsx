import React, { useState } from 'react'

const UseStatePractice2 = () => {
    const [count,setCount]=useState(0)
    const [step,setStep]=useState(1)

    const handelDecrement=()=>{
        if(count>=1){
            setCount(count - step)
        }
    }
    const handleIncrement=()=>{
        if(count<=99){
            setCount(count + step)
        }else{
            <p>Not Allowed</p>
        }
    }
  return (
    <>
    
    <div className='flex gap-7'>

    <h1>Count:{count}</h1>
    <label>
        Step:
        <input type="number"
       
        onChange={(e)=>setStep(Number(e.target.value))}
        />
    </label>
    <button className=' bg-slate-500 text-black' onClick={handleIncrement} disabled={count>=100} >Increment</button>
    <button className=' bg-slate-500 text-black' onClick={()=>setCount(0)}>Reset</button>
    <button className=' bg-slate-500 text-black'onClick={handelDecrement} disabled={count<=0}>Decrement</button>
    </div>
    
    </>
  )
}

export default UseStatePractice2