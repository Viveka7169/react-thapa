import React, { useState } from 'react'

const DerivedState = () => {

    const[user,setUser]=useState([
        
            { id:1, name:"Alice", age:25},
            { id:2, name:"Alice2", age:45},
            {id:3, name:"Alice3", age:25},
            {id:4, name:"Alice4", age:65},
        
    ])
    const userCount=user.length
    const averageAge=user.reduce((accum,curElel)=>accum + curElel.age , 0)/userCount
  return (
    <>
    <h1>User List</h1>
    {
        user.map((curEle,index)=>{
            return(
                <>
                <li key={index}>

                <h2>{curEle.name}</h2>
                <h3>{curEle.age}</h3>
                </li>
                <h1>User Count:{userCount}</h1>
                <h2>Average Age:{averageAge}</h2>
                </>
            )
        })
    }
    </>
  )
}

export default DerivedState