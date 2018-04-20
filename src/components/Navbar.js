import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import couch from '../couch.png'


class Navbar extends Component {
  render() {
    return(
      <div className="navbar">
        <NavLink to="/" className="navbar-left"><img src={couch} className="couch-logo" alt="couch-logo"/></NavLink>
        <NavLink to="/login" className="navbar-right">Log In</NavLink>
        <NavLink to="/signup" className="navbar-right">Sign Up</NavLink>
      </div>
    )
  }
}

export default Navbar;