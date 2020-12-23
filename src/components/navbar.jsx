import React from 'react';
import { NavLink } from 'react-router-dom';
import Players from './players';

const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <a className="navbar-brand" href="#">Pa Connors GFC</a>
    <div className="" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <NavLink className="nav-item nav-link" to="/players">Players</NavLink>
      <NavLink className="nav-item nav-link" to="/events">Events</NavLink>
        
      </div>
    </div>
  </nav>);
}
 
export default NavBar;