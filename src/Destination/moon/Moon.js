import React from 'react'
import moon from './image-moon.png'

const Moon = () => {
  return (
    <div className='ariv'>
      <div className="leftariv">
        <img src={moon} alt="" />
      </div>
      <div className="rightariv">
        <h1 className="arivmain">Moon</h1>
        <p className="arivdesc">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
        <div className="arivline"></div>
        <div className="arivstats">
          <div className="avgdist">
            <div className="title">AVG. DISTANCE</div>
            <div className="stat">384,400 km</div>
          </div>
          <div className="esttime">
            <div className="title">Est. travel time</div>
            <div className="stat">3 days</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Moon