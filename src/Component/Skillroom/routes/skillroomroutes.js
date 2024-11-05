import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mainpage from '../mainpage'

const Skillroomroutes = () => {
  return (
    <>
        <Route path='organization/skillroom' element={<Mainpage/>}/>
    </>
  )
}

export default Skillroomroutes