import React, {Component} from 'react';
import { Grid, FormGroup, FormControl } from 'react-bootstrap';

class SignupForm extends Component {
  render() {
    return(
      <Grid>
        <form>
          <FormGroup>
            <FormControl type="text" placeholder="First Name" />
          </FormGroup>
          <FormGroup>
            <FormControl type="text" placeholder="Last Name" />
          </FormGroup>
        </form>
      </Grid>
    )
  }
}

export default SignupForm;
