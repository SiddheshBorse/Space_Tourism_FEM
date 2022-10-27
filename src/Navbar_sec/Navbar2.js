import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar2.css'

const Navbar2 = () => {
    return (
        <div className='navbar2'>
            <div className="links2">
                <NavLink to='moon' className='desti'>Moon</NavLink>
                <NavLink to='mars' className='desti'>Mars</NavLink>
                <NavLink to='europa' className='desti'>europa</NavLink>
                <NavLink to='titan' className='desti'>Titan</NavLink>
            </div>
        </div>
    )
}

export default Navbar2