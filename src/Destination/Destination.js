import React from 'react'
import { Outlet } from 'react-router'
import Navbar2 from '../Navbar_sec/Navbar2'
import './destination.css'
const Destination = () => {
  return (
    <div className='destination'>
      <h3 className='destipick'><span>01</span> pick your destination</h3>
      <Navbar2/>
      <Outlet/>
    </div>
  )
}

export default Destination