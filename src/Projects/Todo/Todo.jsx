import React, { useState } from 'react'
import { MdDeleteForever,MdCheck } from "react-icons/md";

const Todo = () => {
    const [inputValue,setInputValue]=useState("")
    const [task,setTask]=useState([])

    const handleInputChange=(value)=>{
        setInputValue(value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!inputValue) return console.log("Please enter the task");
        setTask((prev)=> [...prev,inputValue])
        if(task.includes(inputValue)) {
            setInputValue("")
            return;
        }
        setInputValue("")
    }
  return (
    <>
    <section className="flex flex-col items-center min-h-screen pt-12 bg-gradient-to-r from-[#001214] to-[#001f29] text-white transition duration-300 overflow-hidden">
        <header className="flex flex-col items-center justify-around text-3xl min-h-[25vh] w-full">
            <h1 className="text-white text-5xl text-center">Todo List</h1>
        </header>
        <section>
            <form className="flex justify-center text-[1.7rem] my-4 p-3 w-full" onSubmit={handleSubmit}>
                <div>
                    <input type="text" autoComplete='off' value={inputValue}
                    onChange={(e)=>handleInputChange(e.target.value)} className="p-2 text-[1.8rem] tracking-wider border-none outline-none 
             rounded-tl-[17px] rounded-bl-[17px] max-w-[500px] w-full 
             bg-[#f2f3f4] text-primary transition-colors duration-200 ease-in-out hover:cursor-text text-black"  />
                </div>
                <div>
                    <button type='submit'>Add Task</button>

                </div>
            </form>
        </section>
    {/* Array Display  */}
        <section className="flex justify-center items-center max-w-[1200px]">
        <ul className="min-w-[25%] list-none">

        {
            task.map((currEle,index)=>{
                return(
                    
                    <li key={index} className="m-10 text-[20px] text-[#1c2833] bg-[#f2f3f4] rounded-[30px] 
                    transition-colors duration-200 ease-in-out 
                    min-w-[35rem] max-w-[40rem] p-6 px-12 
                    grid grid-cols-[1fr_0.3fr_0.3fr] justify-start gap-6 break-words">
                        
                        <span className="max-w-[20rem] text-[#1c2833]">{currEle}</span>
                        <button className="w-12 h-12 text-black  text-3xl cursor-pointer 
                   rounded-full mx-1 "><MdCheck className=' bg-green-600 rounded-full'/></button>
                        <button className="w-12 h-12 text-black  text-3xl cursor-pointer 
                   rounded-full mx-1 "><MdDeleteForever className=' bg-red-600 rounded-full'/></button>
                        
                        </li>
                    
                )
            })
        }
        </ul>
    </section>
    </section>

    
    
    </>
  )
}

export default Todo