import React from 'react'
import {BrowserRouter as Router, Navigate,Route,Routes } from 'react-router-dom'
import NotFound from '../Component/Notfound/Notfound'
import Mainlayout from '../layout'
import Mainpage from '../Component/Skillroom/mainpage'
import Skillroomroutes from '../Component/Skillroom/routes/skillroomroutes'
import Dashboard from '../Component/dashboard/Dashboard'

const Approutes = () => {
    const childrenelement=<Skillroomroutes/>;
  return (
    <Routes>
        <Route path={'/'} element={<Mainlayout/>}>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='skillroom' element={<Mainpage/>}></Route>
        <Route path='*' element={<NotFound/>}/>
        </Route>
        
    </Routes>
    
  )
}

export default Approutes