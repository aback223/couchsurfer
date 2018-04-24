import React, { Component } from 'react';
import couchworld from '../couchworld.png';
import HomeNav from './HomeNav';
import SignupForm from './SignupForm';
import { Row, Col, Grid } from 'react-bootstrap';

class Homepage extends Component {
  render() {
    return(
      <Grid>
        <Row>
          <HomeNav />
        </Row>
        <Row className="homeContent">
          <div className="addPadding">
            <Col sm={6}>
              <div className="homeImage">
                <img src={couchworld} alt="couchworld"/>
              </div>
            </Col>
            <Col sm={6}>
              <div className="homeSignup">
                <SignupForm />
              </div>
            </Col>
          </div>
        </Row>
      </Grid>
    )
  }
}

export default Homepage;