import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <div className='h-[98vh] flex items-center justify-center'>
        <div className="p-4 w-2/6 rounded-md bg-gray-800">
            <div>
                Log In
            </div>
            <input type="username" placeholder='Username' className='bg-gray-700 px-3 py-2 my-3 rounded-xl w-full '
            name='username' />
    
            <input type="password" placeholder='Password' className='bg-gray-700 px-3 py-2 my-3 rounded-xl w-full '
            name='password' />

           <div className='w-full flex items-center justify-between'>
           <button className='bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded-xl flex '>Login</button>
            <Link to="/signup" className='text-gray-400'>Not having an account? Sign Up here</Link>
           </div>
        </div>
      
    </div>
    </div>
  )
}

export default Login
