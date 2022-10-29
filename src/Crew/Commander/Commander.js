import React from 'react'
import commander from './image-douglas-hurley.png'
// import './commander.css'

const Commander = () => {
  return (
    <div className='person'>
      <div className="personLeft">
        <h3>Commander</h3>
        <h1>Douglas Hurley</h1>
        <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
      </div>
      <div className="personRight">
        <img src={commander} alt="" />
      </div>
    </div>
  )
}

export default Commander