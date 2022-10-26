import React from 'react'
import { NavLink } from 'react-router-dom'
import navimg from '../assets/shared/logo.svg'
import './navbar.css'


const Navbar = ({setBackground}) => {

    return (
        <nav className='nav_content'>
            <img src={navimg} alt="" />
            <div className="line"></div>
            <div className="links">
                <NavLink to='/' onClick={() => { setBackground(1) }} end><span>00</span> Home</NavLink>
                <NavLink to='/destination' onClick={() => { setBackground(2) }}><span>01</span> Destination</NavLink>
                <NavLink to='/crew' onClick={() => { setBackground(3) }}><span>02</span> Crew</NavLink>
                <NavLink to='/technology' onClick={() => { setBackground(4) }}><span>03</span> Technology</NavLink>
            </div>
            
        </nav>
    )
}

export default Navbar