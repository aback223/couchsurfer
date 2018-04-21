import React, { Component } from 'react';
import couchworld from '../couchworld.png';
import HomeNav from './HomeNav';

class Homepage extends Component {
  render() {
    return(
      <div className="homeDiv"> 
        <HomeNav />
        <div className="addPadding homeContent">
          <div className="homeImage">
            <img src={couchworld} />
          </div>
          <div className="homeSignup">
            <form>
              <div className="nameField">
                <input type="text" name="firstName" placeholder="First Name" />
                <input type="text" name="lastName" placeholder="Last Name" />
              </div>
              <div className="emailField">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="passwordField">
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div className="locationField">
                <input type="text" name="location" placeholder="City, State" />
              </div>
              <div className="signupButton">
                <button>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage;