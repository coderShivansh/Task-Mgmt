import React from 'react'
import Sidebar from '../components/Sidebar'
function Home() {
  return (
    <div className='flex h-[98vh] gap-4'>

        <div className='w-1/6 border border-grey-500 rounded-xl p-4 '>
            <Sidebar/>
        </div>
        <div className='w-5/6'>hello2</div>
      
    </div>
  )
}

export default Home
