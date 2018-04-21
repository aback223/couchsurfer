import React, { Component } from 'react';
import couchworld from '../couchworld.png';
import HomeNav from './HomeNav';

class Homepage extends Component {
  render() {
    return(
      <div className="homeDiv"> 
        <HomeNav />
        <div className="addPadding homeContent">
           <img src={couchworld} />
        </div>
      </div>
    )
  }
}

export default Homepage;