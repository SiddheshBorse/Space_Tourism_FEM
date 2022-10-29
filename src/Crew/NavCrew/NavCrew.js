import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavCrew.css'
const NavCrew = () => {
  return (
    <div className='dotstyle'>
      <ul className="Navigation_crew_wrapper">
        <li><NavLink to='commander'>commander</NavLink></li>
        <li><NavLink to='specialist'>Flight Specialist</NavLink></li>
        <li><NavLink to='pilot'>pilot</NavLink></li>
        <li><NavLink to='engineer'>engineer</NavLink></li>
      </ul>
    </div>
  )
}

export default NavCrew