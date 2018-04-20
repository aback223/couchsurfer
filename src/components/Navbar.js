import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import couch from '../couch.png'


class Navbar extends Component {
  render() {
    return(
      <ul className="navbar" style={{padding: 0, margin: 0}}>
        <div className="navbar-left">
          <li className="couch"><NavLink to="/"><img src={couch} alt="couch-logo" className="couch-logo"/></NavLink></li>
          <li className="logo-text"><NavLink to="/">CS</NavLink></li>
          <li className="searchBar">
            <i className="fa fa-search"/>
            <input type="text" name="search" className="search" placeholder="Search..." />
          </li>
        </div>
        <div className="navbar-right">
          <li><NavLink to="/login">Log In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </div>
      </ul>
    )
  }
}

export default Navbar;