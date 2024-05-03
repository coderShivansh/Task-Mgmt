import React from 'react'
import Home from '../src/pages/Home'
import AllTasks from './pages/AllTasks'
import ImpTasks from './pages/ImpTasks'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import IncompletedTasks from './pages/IncompletedTasks'
import CompleteTasks from './pages/CompleteTasks'

const App = () => {
  return (
    <div className="bg-gray-900 text-white h-screen p-2 relative"  >
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}>

              <Route index element={<AllTasks /> }/>
              <Route path='/importantTasks' element={<ImpTasks /> }/>
              <Route path='/completeTasks' element={<CompleteTasks /> }/>
              <Route path='/incompletedTasks' element={<IncompletedTasks /> }/>

          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
