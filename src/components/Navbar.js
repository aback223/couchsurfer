import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {
  render() {
    return(
      <div className="navbar">
        <NavLink to="/" className="navbar-left">Couchsurfer</NavLink>
        <NavLink to="/login" className="navbar-right">Log In</NavLink>
        <NavLink to="/signup" className="navbar-right">Sign Up</NavLink>
      </div>
    )
  }
}

export default Navbar;