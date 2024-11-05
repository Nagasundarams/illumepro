import React from 'react'
import Header from '../Component/Header'
import { Outlet } from 'react-router-dom'

const Mainlayout = () => {
  return (
    <section>
        <Header/>
        <Outlet/>
    </section>
  )
}

export default Mainlayout