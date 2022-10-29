import React from 'react'
import engineer from './image-anousheh-ansari.png'

const Engineer = () => {
  return (
    <div className='person'>
      <div className="personLeft">
        <h3>Flight Engineer</h3>
        <h1>Anousheh Ansari</h1>
        <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
      </div>
      <div className="personRight">
        <img src={engineer} alt="" />
      </div>
    </div>
  )
}

export default Engineer