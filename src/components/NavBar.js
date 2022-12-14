import React from 'react'
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
          <NavLink exact to="/my-events" className="nav-button"> My Events </NavLink>
          <NavLink exact to="/create-event" className="nav-button"> New Event </NavLink>
          <NavLink exact to="/create-venue" className="nav-button"> New Venue </NavLink>
    </div>
  )
}
export default NavBar