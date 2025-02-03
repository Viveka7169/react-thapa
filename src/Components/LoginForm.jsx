import React, { useState } from 'react'

const LoginForm = () => {
    const [userData,setUserData]=useState({
        userName:"",
        password:""
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(userData);
    }
    const handleUserDataChange=(e)=>{
        const {name,value}=e.target
        setUserData((prev)=>({...prev,[name]:value}))

    }
  return (
    <>
    <div className=' w-1/3 h-1/2 bg-slate-400 flex flex-col justify-center items-center mx-auto my-auto'>
        <h1 className=' text-4xl text-black mb-6'>Login Form</h1>
        <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
            <div className=' flex flex-col'>
                <label className='text-2xl'>
                    UserName:
                </label>
                <input type="text" className=' bg-slate-200 border-none hover:border-none' name='userName'
                value={userData.userName}
                onChange={handleUserDataChange}
                />
            </div>
            <div className=' flex flex-col mb-4'>
                <label className='text-2xl'>
                    Password:
                </label>
                <input type="password" className=' bg-slate-200 border-none' name='password'
                value={userData.password}
                onChange={handleUserDataChange}
                />
            </div>
            <div className=' w-full'>
                <button type='submit' className=' w-full bg-blue-400 text-xl text-white p-2 m-2'>Login</button>
            </div>

        </form>
    </div>
    </>
  )
}

export default LoginForm