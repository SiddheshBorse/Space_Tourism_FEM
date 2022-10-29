import React from 'react'
import sp from './image-spaceport-portrait.jpg'

const Sp = () => {
  return (
    <>
      <div className="tech-details">
        <h3>THE TERMINOLOGY…</h3>
        <h1>SPACEPORT</h1>
        <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
      </div>
      <img src={sp} alt="" />
    </>
  )
}

export default Sp