import React, { useContext } from 'react'
import { ThemeContext } from './Context'

const DarkAndLightTheme = () => {
    const {theme,handleToggleBtn}=useContext(ThemeContext)
  return (
   <>
   <div className={`p-4 h-lvh flex flex-col justify-center items-center  ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      } `}>
    <h1 className={`my-4 text-xl  ${
          theme === "light" ? "text-gray-800" : "text-white"
        }`}>Dark and Light  Mode</h1>
    <button 
     className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4"
    onClick={handleToggleBtn}>{theme==="dark"? "Switch to Light Mode":"Switch to Dark Mode"}</button>
   </div>
   </>
  )
}

export default DarkAndLightTheme