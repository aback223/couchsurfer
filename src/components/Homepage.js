import React, { Component } from 'react';
import couchworld from '../couchworld.jpg'

class Homepage extends Component {
  render() {
    return(
      <div className="addPadding homeContent">
         <img src={couchworld} />
         <h1 className="homeTitle">CouchSurfer</h1>
      </div>
    )
  }
}

export default Homepage;