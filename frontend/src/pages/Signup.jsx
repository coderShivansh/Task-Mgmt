import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='h-[98vh] flex items-center justify-center'>
        <div className="p-4 w-2/6  rounded-md bg-gray-800">
            <div> 
                Sign Up
            </div>
            <input type="username" placeholder='Username' className='bg-gray-700 px-3 py-2 my-3 rounded-xl w-full '
            name='username' />
            <input type="email" placeholder='E-Mail' className='bg-gray-700 px-3 py-2 my-3 rounded-xl w-full '
            name='xyz@example.com' required />
            <input type="password" placeholder='Password' className='bg-gray-700 px-3 py-2 my-3 rounded-xl w-full '
            name='password' />
             <div className='w-full flex items-center justify-between'>
           <button className='bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded-xl flex '>Sign Up</button>
            <Link to="/login" className='text-gray-400'>Already having an account? Login here</Link>
           </div>

        </div>
      
    </div>
  )
}

export default Signup
