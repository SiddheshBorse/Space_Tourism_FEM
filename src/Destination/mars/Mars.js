import React from 'react'
import mars from './image-mars.png'

const Mars = () => {
  return (
    <div className='ariv'>
      <div className="leftariv">
        <img src={mars} alt="" />
      </div>
      <div className="rightariv">
        <h1 className="arivmain">Mars</h1>
        <p className="arivdesc">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
        <div className="arivline"></div>
        <div className="arivstats">
          <div className="avgdist">
            <div className="title">AVG. DISTANCE</div>
            <div className="stat">225 MIL. km</div>
          </div>
          <div className="esttime">
            <div className="title">Est. travel time</div>
            <div className="stat">9 months</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mars