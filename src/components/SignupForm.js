import React, {Component} from 'react';
import { Form, Row, Button, FormGroup, FormControl } from 'react-bootstrap';

class SignupForm extends Component {
  render() {
    return(
      <Form inline className="signupForm">
        <div className="nameFields">
          <Row>
            <FormGroup>
              <FormControl type="text" placeholder="First Name" />
              <FormControl type="text" placeholder="Last Name" />
            </FormGroup>
          </Row>
        </div>
        <div className="singleRows">
          <Row>
            <FormGroup>
              <FormControl type="text" placeholder="Email" />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <FormControl type="password" placeholder="Password" />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <FormControl type="text" placeholder="City, State" />
            </FormGroup>
          </Row>
        </div>
        <div className="signupButton"> 
          <Button type="button" bsSize="large" bsStyle="primary">Sign Up</Button>
        </div>
      </Form>
    )
  }
}

export default SignupForm;
