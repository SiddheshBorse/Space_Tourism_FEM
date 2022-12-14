import React from 'react'
import './home.css'
import { useNavigate } from 'react-router'



const Home = ({setBackground}) => {
  const navigate = useNavigate();
  return (
    <div className='home'>
      <div className="left">
        <h2>So, you want to travel to</h2>
        <h1>Space</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className="right">
        <button onClick={()=>{
          navigate('/destination/moon')
          setBackground(2)
        }} >Explore</button>
      </div>
    </div>
  )
}

export default Home