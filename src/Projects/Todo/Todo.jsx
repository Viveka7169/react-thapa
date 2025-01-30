import React from 'react'

const Todo = () => {
  return (
    <>
    <section className="flex flex-col items-center min-h-screen pt-12 bg-gradient-to-r from-[#001214] to-[#001f29] text-white transition duration-300 overflow-hidden">
        <header className="flex flex-col items-center justify-around text-3xl min-h-[25vh] w-full">
            <h1 className="text-white text-5xl text-center">Todo List</h1>
        </header>
        <section>
            <form className="flex justify-center text-[1.7rem] my-4 p-3 w-full">
                <div>
                    <input type="text" autoComplete='off' className="p-2 text-[1.8rem] tracking-wider border-none outline-none 
             rounded-tl-[17px] rounded-bl-[17px] max-w-[500px] w-full 
             bg-[#f2f3f4] text-primary transition-colors duration-200 ease-in-out hover:cursor-text"  />
                </div>
                <div>
                    <button type='submit'>Add Task</button>

                </div>
            </form>
        </section>
    </section>
    </>
  )
}

export default Todo