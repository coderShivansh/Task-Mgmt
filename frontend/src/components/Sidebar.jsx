import React from 'react'
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { MdOutlineDoneAll } from "react-icons/md";
import { MdQueue } from "react-icons/md";
import { Link } from 'react-router-dom';

function Sidebar() {
    const data = [
        {
            title: "All Tasks",
            icons: <CgNotes />,
            link: "/",
        },
        
        {
            title: "Important Tasks",
            icons: <MdLabelImportant />,
            link: "/importantTasks",
        },

        {
            title: "Complete Tasks",
            icons: <MdOutlineDoneAll />,
            link: "/completeTasks",
        },

        {
            title: "Incompleted Tasks",
            icons: <MdQueue />,
            link: "/incompletedTasks",
        },

    ]
  return (
    <>
      <div>
        <h2 className='my-2'>Shivansh Upadhyay</h2>
        <h4 className='mb-1 text-gray-400'>codershivansh@gmail.com</h4>
        <hr />
       </div>

       <div className=''>
            {data.map((items, i) => (
                <Link to={items.link} key={i} className='my-2 flex items-center gap-2 hover:bg-gray-600 p-2 rounded transition-all duration-300'>
                   {items.icons} {items.title}
                </Link>))}
       </div>

       <div>
        <button className='bg-gray-600 w-full p-2 rounded '>Log Out</button>
       </div>
       
    </>
    
  )
}

export default Sidebar
