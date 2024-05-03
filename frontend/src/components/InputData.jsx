import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";



const InputData = ({InputDiv}) => {
  return (
    <>
      <div className = {`${InputDiv} top-0 left-0 bg-gray-700 opacity-80 h-screen w-full`}></div>
      <div className = {`${InputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}> 
        <div className="w-2/6 bg-gray-900 p-4 rounded-xl">
      <div className='flex justify-end'>
        <button className='text-2xl'>

         <IoIosCloseCircle />
        </button>

      </div>
            <input type="text"
            placeholder='Title' 
            name='Title' 
            className='px-3 py-2 my-3 rounded bg-gray-700' />

            <textarea placeholder='Enter The Description...'
             name='Title'
              className='px-3 py-2 my-3 rounded w-full bg-gray-700'
               id=""
                cols="30"
                 rows="10"></textarea>

                 <button className='px-3 py-2 bg-blue-400 rounded text-black text-2xl font-semibold'>Submit</button>
                 

        </div>
      </div>
    </>
  )
}

export default InputData
