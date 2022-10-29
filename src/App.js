import './App.css';
import { Route, Routes } from 'react-router'
import Home from './home-folder/Home'
import Crew from './Crew/Crew';
import Destination from './Destination/Destination';
import Technology from './Technology/Technology';
import Navbar from './Navbar/Navbar';
import { useState } from 'react'
import './App.css'
import classNames from 'classnames'
import Europa from './Destination/europa/Europa'
import Mars from './Destination/mars/Mars'
import Moon from './Destination/moon/Moon'
import Titan from './Destination/titan/Titan';
import Commander from './Crew/Commander/Commander';
import Engineer from './Crew/FEngineer/Engineer';
import Specialist from './Crew/MSpecialist/Specialist';
import Pilot from './Crew/Pilot/Pilot';


function App() {
  const [background, setBackground] = useState(1);
  const appClass = classNames('app', 'background',
  {
    'background-home':background===1,
    'background-destination': background === 2,
    'background-crew': background === 3,
    'background-technology': background === 4
  })
  
  return (
    <div className={appClass}>
      <Navbar setBackground={setBackground}/>
      <Routes>
        <Route path='/' element={<Home />} setBackground={setBackground}/>
        <Route path='/crew' element={<Crew/>}>
          <Route path='commander' element={<Commander/>}/>
          <Route path='engineer' element={<Engineer/>} />
          <Route path='specialist' element={<Specialist/>} />
          <Route path='pilot' element={<Pilot/>} />
        </Route>
        <Route path='/destination' element={<Destination/>}>
          <Route path='europa' element={<Europa/>}/>
          <Route path='mars' element={<Mars/>}/>
          <Route path='moon' element={<Moon/>} />
          <Route path='titan' element={<Titan/>} />
        </Route>
        <Route path='/technology' element={<Technology/>} />       
      </Routes>
    </div> 
  );
}

export default App;
