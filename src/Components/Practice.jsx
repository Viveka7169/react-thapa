import React from 'react'
const Pracite=()=>{
    const students=[1,2,3,4,5,6]
return(
    <>
    <p>{students.length===0 && "No Students Found"}</p>

    {/* *********2nd Way************* */}
    <p>{!students.length && "No Students Found"}</p>
    <p>No of Students:{students.length}</p>
    </>
)
}
export default Pracite