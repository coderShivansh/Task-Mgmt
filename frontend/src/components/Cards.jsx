import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";

const Cards = ( {home} ) => {
    const data = [
        {
            title: "React is a good framework",
            desc: "React is a good framework for developing applications in React and it is fast and simple",
            status: "In Complete"
        },

        {
            title: "GATE Preparation is important",
            desc: "GATE Preparation is important for building core concepts and consistency in life of students",
            status: "Complete"
        },

        {
            title: "My Birthday",
            desc: "My Birthday is on 21st October, I've to celebrate it with my family",
            status: "In Complete"
        },

        {
            title: "Projects",
            desc: "Video Chat, Multimedia Sharing, Task Management, Songs Lyrics, and Canteen App",
            status: "In Complete"
        },
    ];
  return (
    <div className='grid grid-cols-3 gap-4 p-4 '>
        {data && data.map((items, i) => (
        <div className='flex flex-col justify-between bg-gray-800 rounded-xl p-4'>
             <div>
                     <h3 className='text-xl font-semibold'>  {items.title}   </h3>
                     <p className='text-gray-300 my-2  '>{items.desc}</p>
             </div>
               
                    
             <div className="mt-4 w-full flex items-center">
                 <button className={`${items.status === "In Complete" ? "bg-red-400" : "bg-green-400"} p-2 rounded w-3/6`}>
                    {items.status}
                 </button>

                <div className='text-white p-2 w-3/6 text-xl flex justify-around'>
                    <button>
                        <FaRegHeart />
                    </button>
                    <button>
                        <FaEdit />
                    </button>
                    <button>
                        <MdDelete />
                    </button>
                </div>
             </div>
        </div>
            
            ))}
        {home === "true" && (<div className='flex flex-col justify-center items-center bg-gray-800 rounded-xl p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-100'>
            <MdAddCircle className='text-4xl'/>

             <h2 className='text-2xl mt-2 '>Add Task</h2>
        </div>)}

      
    </div>
  )
}

export default Cards
