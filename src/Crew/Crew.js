import React from 'react'
import { Outlet } from 'react-router'
import './crew.css'
import NavCrew from './NavCrew/NavCrew'

const Crew = () => {
  return (
    <div className='crewName'>
      <h3 className='crewTitle'><span>02</span> Meet your crew</h3>
      <div className="grid-crew-wrapper">
        <Outlet />
        <NavCrew />
      </div>
      
    </div>
  )
}

export default Crew