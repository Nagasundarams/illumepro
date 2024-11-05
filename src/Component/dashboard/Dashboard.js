import React from 'react'
import Sidebar from '../SideBar'

const Dashboard = () => {
    const navItems = [
        {
          value: 'organizations',
          navField: 'Organizations'
        }]
  return (
    <>
    <Sidebar navItems={navItems}/>
    <div>Dashboard</div></>
  )
}

export default Dashboard