import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return(
      <div className="navbar">
        <NavLink to="/">Couchsurfer</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Log In</NavLink>
      </div>
    )
  }
}

export default Navbar;