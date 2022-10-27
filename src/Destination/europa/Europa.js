import React from 'react'
import europa from './image-europa.png'

const Europa = () => {
  return (
    <div className='ariv'>
      <div className="leftariv">
        <img src={europa} alt="" />
      </div>
      <div className="rightariv">
        <h1 className="arivmain">Europa</h1>
        <p className="arivdesc">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream.With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
        <div className="arivline"></div>
        <div className="arivstats">
          <div className="avgdist">
            <div className="title">AVG. DISTANCE</div>
              <div className="stat">628 MIL. km</div>
          </div>
          <div className="esttime">
            <div className="title">Est. travel time</div>
            <div className="stat">3 years</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Europa