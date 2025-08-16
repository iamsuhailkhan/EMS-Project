import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email , setEmail] = useState ("")
    const [password, setPassword] = useState("")

    const submitHandler = (e)=> {
        e.preventDefault() 
        handleLogin(email,password)
        setEmail("")
        setPassword("")
        
    }
  return (
    <div className='flex flex-col h-screen w-screen items-center justify-center'>
      <h1 className='text-emerald-800 text-3xl mb-5 font-bold' >Log In to Your Deshboard</h1>
        <div className='border-4 rounded-xl border-emerald-600 p-20'>
            <form 
             onSubmit={(e)=>{
               submitHandler(e)
             }}
             className='flex flex-col items-center justify-center'>
                <input value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }
                }
                required className='text-black outline-none bg-transparent border-3 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray' type="email" placeholder='Enter Your Email' 
                />
                <input value={password}
                onChange={(e)=> {
                    setPassword(e.target.value)
                }}
                required className='text-black outline-none bg-transparent border-3 border-emerald-600 rounded-full py-3 px-5 text-xl mt-3 placeholder:text-gray' type="password" placeholder='Enter Your Password' 
                />
                <button className='text-black outline-none border-none hover:bg-emerald-700 rounded-full bg-emerald-600 text-lg py-2 px-8 mt-7 placeholder:text-white'>Log In</button>
            </form>

        </div>

    </div>
  )
}

export default Login