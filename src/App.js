import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router'
import Home from './home-folder/Home'
import Crew from './Crew/Crew';
import Destination from './Destination/Destination';
import Technology from './Technology/Technology';
import Navbar from './Navbar/Navbar';
import { useState } from 'react'
import background1 from './assets/crew/background-crew-desktop.jpg'
import './App.css'
import classNames from 'classnames'

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
        <Route path='/' element={<Home />} />
        <Route path='/crew' element={<Crew/>} />
        <Route path='/destination' element={<Destination/>} />
        <Route path='/technology' element={<Technology/>} />
        
      </Routes>
    </div> 
  );
}

export default App;
