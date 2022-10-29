import React from 'react'
import specialist from './image-mark-shuttleworth.png'
const Specialist = () => {
  return (
    <div className='person'>
      <div className="personLeft">
        <h3>Mission Specialist </h3>
        <h1>MARK SHUTTLEWORTH</h1>
        <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
      </div>
      <div className="personRight">
        <img src={specialist} alt="" />
      </div>
    </div>
  )
}

export default Specialist