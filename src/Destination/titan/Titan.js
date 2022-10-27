import React from 'react'
import titan from './image-titan.png'

const Titan = () => {
  return (
    <div className='ariv'>
      <div className="leftariv">
        <img src={titan} alt="" />
      </div>
      <div className="rightariv">
        <h1 className="arivmain">titan</h1>
        <p className="arivdesc">The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
        <div className="arivline"></div>
        <div className="arivstats">
          <div className="avgdist">
            <div className="title">AVG. DISTANCE</div>
            <div className="stat">1.6 BIL. km</div>
          </div>
          <div className="esttime">
            <div className="title">Est. travel time</div>
            <div className="stat">7 years</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Titan