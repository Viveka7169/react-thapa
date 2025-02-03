// import React, { useState } from 'react'

// const RegistrationForm = () => {
//     const [firstName,setFirstName]=useState("")
//     const [lastName,setLastName]=useState("")
//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")
//     const [phoneNumber,setPhoneNumber]=useState()
    
//     const handleInputChange=(e)=>{
//         const {name,value}=e.target
//         switch(name){
//             case "firstName":
//                 setFirstName(value)
//                 break;

//                 case "lastName":
//                 setLastName(value)
//                 break;

//                 case "email":
//                 setEmail(value)
//                 break;

//                 case "password":
//                 setPassword(value)
//                 break;

//                 case "pnumber":
//                 setPhoneNumber(value)
//                 break;

//         }


//     }
//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         const formData={
//             firstName,
//             lastName,
//             email,
//             password,
//             phoneNumber
//         }
//         console.log(formData);
//     }

//   return (
//     <>
//     <div className=' flex flex-col gap-7 justify-center items-center '>

//     <h1 className=' font-bold text-4xl'>Sign Up</h1>
//     <p className=' font-light'>Please fill in this form to create an account</p>
    
//     <section className='w-64 justify-center items-center gap-7'>
//         <form className='flex flex-col bg-slate-400 border-l-slate-800 gap-4' onSubmit={handleSubmit}>
//             <label htmlFor="firstName">FirstName:</label>
//             <input type="text"
//             placeholder='Enter First Name'
//             name='firstName'
//             onChange={handleInputChange}
//             value={firstName}
//             />

// <label htmlFor="lastName">LastName:</label>
//             <input type="text"
//             placeholder='Enter Last Name'
//             name='lastName'
//             onChange={handleInputChange}   
//             value={lastName}         />

// <label htmlFor="email">Email:</label>
//             <input type="email"
//             placeholder='Enter email'
//             name='email'
//             onChange={handleInputChange} 
//             value={email}           />

// <label htmlFor="password">Password:</label>
//             <input type="password"
//             placeholder='Enter Password'
//             name='password'
//             onChange={handleInputChange}     
//             value={password}       />

// <label htmlFor="pnumber">Phone Number:</label>
//             <input type="number"
//             placeholder='Enter Phone Number'
//             name='pnumber'
//             onChange={handleInputChange} 
//             value={phoneNumber}           />

//             <p>By Creating an account,you agree to out &Terms and Privecy</p>
//             <button type='submit'>Submit</button>

//         </form>
//     </section>
//     </div>

//     </>
//   )
// }

// export default 

// ***********************Another Best Way***********************************



import React, { useState } from 'react'

const RegistrationForm = () => {
    const [userData,setUserData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        phoneNumber:""
    })
                const handleInputChange=(e)=>{
                            const {name,value}=e.target
                            setUserData((prev)=>({...prev,[name]:value}))
                    
                        }


                    const handleSubmit=(e)=>{
                        e.preventDefault()
                        console.log(userData);
                    }
        
          return (
            <>
            <div className=' flex flex-col gap-7 justify-center items-center '>
        
            <h1 className=' font-bold text-4xl'>Sign Up</h1>
            <p className=' font-light'>Please fill in this form to create an account</p>
            
            <section className='w-64 justify-center items-center gap-7'>
                <form className='flex flex-col bg-slate-400 border-l-slate-800 gap-4' onSubmit={handleSubmit}>
                    <label htmlFor="firstName">FirstName:</label>
                    <input type="text"
                    placeholder='Enter First Name'
                    name='firstName'
                    onChange={handleInputChange}
                    value={userData.firstName}
                    />
        
        <label htmlFor="lastName">LastName:</label>
                    <input type="text"
                    placeholder='Enter Last Name'
                    name='lastName'
                    onChange={handleInputChange}   
                    value={userData.lastName}         />
        
        <label htmlFor="email">Email:</label>
                    <input type="email"
                    placeholder='Enter email'
                    name='email'
                    onChange={handleInputChange} 
                    value={userData.email}           />
        
        <label htmlFor="password">Password:</label>
                    <input type="password"
                    placeholder='Enter Password'
                    name='password'
                    onChange={handleInputChange}     
                    value={userData.password}/>
        
        <label htmlFor="pnumber">Phone Number:</label>
                    <input type="number"
                    placeholder='Enter Phone Number'
                    name='phoneNumber'
                    onChange={handleInputChange} 
                    value={userData.phoneNumber}           />
        
                    <p>By Creating an account,you agree to out &Terms and Privecy</p>
                    <button type='submit'>Submit</button>
        
                </form>
            </section>
            </div>
        
            </>
          )
}

export default RegistrationForm