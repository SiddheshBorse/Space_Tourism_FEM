import React from 'react'
import { Outlet } from 'react-router'
import Technav from './Tech_Nav/Technav'
import './technology.css'

const Technology = () => {
  return (
    <div className='Technology'>
      <h3 className='tech-title'><span>03</span> Space Launch 101 </h3>
      <div className="page-contents">
        <Technav />
        <Outlet />
      </div>
      
    </div>
  )
}

export default Technology