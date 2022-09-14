import React from 'react'
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <div>
          <NavLink exact to="/" className="nav-button"> My Events </NavLink>
          <NavLink exact to="/" className="nav-button"> New Event </NavLink>
          <NavLink exact to="/" className="nav-button"> New Venue </NavLink>
          <NavLink to='/' className="nav-button">Artist Stats</NavLink>

    </div>
  )
}

export default NavBar
