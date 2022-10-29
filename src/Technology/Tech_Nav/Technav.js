import React from 'react'
import { NavLink } from 'react-router-dom'
import './technav.css'

const Technav = () => {
    return (
        <div>
            <div className="technav">
                <NavLink to='/technology/launch-vehicle'>1</NavLink>
                <NavLink to='/technology/space-port'>2</NavLink>
                <NavLink to='/technology/space-capsule'>3</NavLink>
                
            </div>
        </div>
    )
}

export default Technav