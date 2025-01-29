// import React from 'react'

// const UseStatePractice = () => {

//     const user=[
//         { name:"Alice", age:25},
//         { name:"Alice2", age:25},
//         { name:"Alice3", age:25},
//         { name:"Alice4", age:25},
//     ]
//   return (
//     <>
//     <h1>User List</h1>
//     {
//         user.map((user)=>{
//             return(
//                 <>
//                 <div key={user.name}>

//                 <h2>{user.name}</h2>
//                 <h3>{user.age}</h3>
//                 </div>
//                 </>
//             )
//         })
//     }
//     </>
//   )
// }

// export default UseStatePractice

// ********************Another Way*******************************

import React, { useState } from 'react'

const UseStatePractice = () => {

    const[user,setUser]=useState([
        
            { id:1, name:"Alice", age:25},
            { id:2, name:"Alice2", age:25},
            {id:3, name:"Alice3", age:25},
            {id:4, name:"Alice4", age:25},
        
    ])
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
                </>
            )
        })
    }
    </>
  )
}

export default UseStatePractice