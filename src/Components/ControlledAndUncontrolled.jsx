import React, { useState } from 'react'

const ControlledAndUncontrolled = () => {
    const [name,setName]=useState("")
    const handleInput=(e)=>{
        e.preventDefault()
        // Uncontrolled Component
    //  const datavalue=document.querySelector("#inputname").value;
    //  console.log(datavalue);   

        //Controlled Component

        console.log(name);


    }
    const handleChange=(e)=>{
        setName(e.target.value)
    }
  return (
    <>
    <section>
        <h1>Uncontrolled Component</h1>
        <form onSubmit={handleInput}>
            <label>
                Name:</label>
                <input id='inputname' type="text" value={name} onChange={handleChange} />
            <button type='submit'>Submit</button>
        </form>
    </section>
    </>
  )
}

export default ControlledAndUncontrolled