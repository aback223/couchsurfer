import React, {Component} from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';

class SignupForm extends Component {
  render() {
    return(
      <form>
        <FormGroup>
          <FormControl type="text" />
        </FormGroup>
      </form>
    )
  }
}

export default SignupForm;
