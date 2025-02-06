import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <>
    <header className=' bg-slate-500 flex w-screen'>
      <ul className=' flex gap-4 p-2'>
        <li>
         <NavLink to="/"
         className={({isActive})=> isActive ? "text-green-600":"text-blue-600"}
         >Home</NavLink>
        </li>
        <li>

          {/* Another Method to give color ti Navlink active Class  */}
         <NavLink to="about"
         style={({isActive})=> {return{
          color:isActive? "red" : "black"
         }}}
         >About</NavLink>
        </li>
        <li>
         <NavLink to="/movie"
         
         >Movie</NavLink>
        </li>
      </ul>
    </header>
    </>
  )
}

export default Header