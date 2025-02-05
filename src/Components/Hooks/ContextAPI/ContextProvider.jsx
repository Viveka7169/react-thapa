import { useState } from "react"
import {ThemeContext} from "./Context"
export const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState("dark")
    const handleToggleBtn=()=>{
        return setTheme((prev)=>(prev==="dark"? "light":"dark"))
    }
    return(
        <>
        <ThemeContext.Provider value={{theme, handleToggleBtn}}>
            {children}
        </ThemeContext.Provider>
        </>
    )
}