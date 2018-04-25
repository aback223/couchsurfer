import React, {Component} from 'react';
import { Form, Row, Button, FormGroup, FormControl } from 'react-bootstrap';

class SignupForm extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '', 
      lastName: '', 
      email: '', 
      password: '', 

    }
  }

  render() {
    return(
      <Form inline className="signupForm">
        <div className="nameFields">
          <Row>
            <FormGroup validationState={this.getValidationState()}>
              <FormControl type="text" name="firstName" placeholder="First Name" />
              <FormControl type="text" name="lastName" placeholder="Last Name" />
            </FormGroup>
          </Row>
        </div>
        <div className="singleRows">
          <Row>
            <FormGroup>
              <FormControl type="text" name="email" placeholder="Email" />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <FormControl type="password" name="password" placeholder="Password" />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <FormControl type="text" name="location" placeholder="City, State" />
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
