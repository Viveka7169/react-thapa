import React, { useState } from 'react'

const ContactForm = () => {
//     const [contactInfo,setContactInfo]=useState({
//         username:"",
//         password:"",
//         contactmessage:""
//     })
//     const handleInputChange=(e)=>{
//         const{name,value}=e.target
//         setContactInfo((prev)=>({...prev,[name]:value}))

//     }

//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         console.log(contactInfo);
//     }
//   return (
//     <>
//     <div>
//         <h1>Contact Form</h1>
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="username">UserName:</label>
//             <input type="text" name="username"
//             value={contactInfo.username}
//             onChange={handleInputChange}
//             />
//             <label htmlFor="password">Password:</label>
//             <input type="password" name="password"
//             value={contactInfo.password}
//             onChange={handleInputChange}
//             />
//             <label htmlFor="contactmessage">Message</label>
//             <textarea name="contactmessage" id=""
//             value={contactInfo.contactmessage}
//             onChange={handleInputChange}
//             />
//             <button>Send Message</button>
        
//         </form>
//     </div>
//     </>
//   )



// **************************Another Way*************************************
const [userName,setUserName]=useState("")
const [password,setPassword]=useState("")
const[message,setMessage]=useState("")
const handleSubmit=(e)=>{
    e.preventDefault()
    const formData={
        userName,
        password,
        message
    }
    console.log(formData);
}
return(
    <>
        <div>
         <h1>Contact Form</h1>
         <form onSubmit={handleSubmit} >
             <label htmlFor="username">UserName:</label>
             <input type="text" name="username"
             value={userName}
             onChange={(e)=>setUserName(e.target.value)}
             />
             <label htmlFor="password">Password:</label>
             <input type="password" name="password"
             onChange={(e)=>setPassword(e.target.value)}
             value={password}
             />
             <label htmlFor="contactmessage">Message</label>
             <textarea name="contactmessage" id=""
             onChange={(e)=>setMessage(e.target.value)}
             value={message}
             />
             <button>Send Message</button>
        
         </form>
     </div>
    </>
)


}

export default ContactForm