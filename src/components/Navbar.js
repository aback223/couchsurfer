import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import couch from '../couch.png'


class Navbar extends Component {
  render() {
    return(
      <div className="navbar">
        <NavLink to="/"><img src={couch} alt="couch-logo" className="couch-logo"/></NavLink>
        <div className="searchBar">
          <i className="fa fa-search fa-2x"/>
          <input type="text" name="search" className="search" placeholder="Search..." />
        </div>
        <NavLink to="/login" className="navbar-right">Log In</NavLink>
        <NavLink to="/signup" className="navbar-right">Sign Up</NavLink>
      </div>
    )
  }
}

export default Navbar;