import React, { forwardRef, useId, useRef } from 'react'

const UseForwardRef = () => {
    const username=useRef(null)
    const password=useRef(null)
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(username.current.value,password.current.value);

    }
  return (
    <form onSubmit={handleSubmit}>
        <BeforeReact19 label="username" ref={username}/>
        <BeforeReact19 label="password" ref={password}/>
        <button>Submit</button>
    </form>
  )
}

export default UseForwardRef

const BeforeReact19=forwardRef((props,ref)=>{
    const id=useId();
    return(
        <>
        <div>
            <label htmlFor={id}>{props.label}</label>
            <input type="text" ref={ref} />
        </div>
        </>
    )
})