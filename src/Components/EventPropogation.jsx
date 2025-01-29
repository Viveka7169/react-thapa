// import React from 'react'
// // This is by Deafult event bubbling
// const EventPropogation = () => {
//     const childHandler=(e)=>{
//         console.log("Child event clicked");
//         console.log(e);
//     }
//     const parentHandler=()=>{
//         console.log("Parent event clicked");
//     }
//     const grandParentHandler=()=>{
//         console.log("grandParent event clicked");
//     }
//   return (
//     <>
//     <div onClick={grandParentHandler} className=' w-40 bg-slate-600 mx-auto my-auto p-14'>
       
//         <div onClick={parentHandler} className='w-20 bg-slate-500 p-8'>
          
//             <div className=' w-12 bg-slate-400 text-black'>
//                 <button onClick={childHandler}>Click</button>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default EventPropogation


// ************************Event Capturing******************************************
import React from 'react'
// This is event capturing
const EventPropogation = () => {
    const childHandler=(e)=>{
        console.log("Child event clicked");
        console.log(e);
        e.stopPropagation()
    }
    const parentHandler=(e)=>{
        console.log("Parent event clicked");
        e.stopPropagation()
    }
    const grandParentHandler=(e)=>{
        console.log("grandParent event clicked");
        e.stopPropagation()
    }
  return (
    <>
    <div onClickCapture={grandParentHandler} className=' w-40 bg-slate-600 mx-auto my-auto p-14'>
       
        <div onClickCapture={parentHandler} className='w-20 bg-slate-500 p-8'>
          
            <div className=' w-12 bg-slate-400 text-black'>
                <button onClickCapture={childHandler}>Click</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default EventPropogation
