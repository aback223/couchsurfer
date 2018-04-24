import React, {Component} from 'react';
import { Row, Col, Grid, FormGroup, FormControl } from 'react-bootstrap';

class SignupForm extends Component {
  render() {
    return(
      <Grid>
        <form>
          <Row>
            <FormGroup>
              <FormControl type="text" placeholder="First Name" />
            </FormGroup>
            <FormGroup>
              <FormControl type="text" placeholder="Last Name" />
            </FormGroup>
          </Row>
        </form>
      </Grid>
    )
  }
}

export default SignupForm;
