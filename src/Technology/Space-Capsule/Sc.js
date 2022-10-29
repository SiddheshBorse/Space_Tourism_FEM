import React from 'react'
import sc from './image-space-capsule-portrait.jpg'

const Sc = () => {
  return (
    <>
      <div className="tech-details">
        <h3>THE TERMINOLOGY…</h3>
        <h1>SPACE CAPSULE</h1>
        <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
      </div>
      <img src={sc} alt="" />
    </>
  )
}

export default Sc