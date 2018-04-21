import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import couch from '../couch.png'

class HomeNav extends Component {
  render() {
    return (
      <ul className="navbar homenav" style={{padding: 0, margin: 0}}>
        <div className="navbar-left">
          <li className="couch"><NavLink to="/"><img src={couch} alt="couch-logo" className="couch-logo"/></NavLink></li>
          <li className="logo-text"><NavLink to="/">CouchSurfer</NavLink></li>
        </div>
        <div className="navbar-right">
          <li><NavLink to="/login">Log In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </div>
      </ul>
    )
  }
}

export default HomeNav;