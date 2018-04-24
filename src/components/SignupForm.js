import React, {Component} from 'react';
import { Form, Row, Button, FormGroup, FormControl } from 'react-bootstrap';

class SignupForm extends Component {
  render() {
    return(
      <Form inline className="signupForm">
        <Row>
          <FormGroup>
            <FormControl type="text" placeholder="First Name" />
          </FormGroup>
          <FormGroup>
            <FormControl type="text" placeholder="Last Name" />
          </FormGroup>
        </Row>
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
        <button type="button" className="signupButton">Sign Up</button>
      </Form>
    )
  }
}

export default SignupForm;
