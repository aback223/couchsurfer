import React, { Component } from 'react';
import couchworld from '../couchworld.png';
import HomeNav from './HomeNav';
import SignupForm from './SignupForm';

class Homepage extends Component {
  render() {
    return(
      <div className="homeDiv"> 
        <HomeNav />
        <div className="addPadding homeContent">
          <div className="homeImage">
            <img src={couchworld} alt="couchworld"/>
          </div>
          <div className="homeSignup">
            <SignupForm />
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage;