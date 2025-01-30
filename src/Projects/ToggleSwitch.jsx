import React, { useState } from 'react'

const ToggleSwitch = () => {
    const [isOn,setIsOn]=useState(false)
    const handleToggle=()=>{
        setIsOn(!isOn)
    }
  return (
   <>
   <div onClick={handleToggle}
   className=' w-20'
   style={{backgroundColor: isOn ? "#4caf50" : "#f44336"}}
   >
    <div>
        <span>{isOn ? "On" : "Off"}</span>
    </div>
   </div>
   </>
  )
}

export default ToggleSwitch