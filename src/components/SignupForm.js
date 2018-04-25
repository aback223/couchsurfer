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
      location: '',
      errorMessage: '', 
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  createNewAccount = (event) => {
    const {firstName, lastName, email, password, location, errorMessage } = this.state;
    event.preventDefault();
    if (firstName === '' || lastName === '' || email === '' || password === '' || location === '') {
      this.setState({errorMessage: "All fields must be filled."});
    } else if (!email.includes("@") || !email.includes(".com")) {
      this.setState({errorMessage: "Please provide a valid email address."})
    } else {
      this.setState({errorMessage:''})
    }
  }

  render() {
    return(
      <div>
        <Form inline className="signupForm" onSubmit={this.createNewAccount}>
          <div className="nameFields">
            <Row>
              <FormGroup>
                <FormControl 
                  type="text" 
                  name="firstName" 
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.handleChange} 
                  />
                <FormControl 
                  type="text" 
                  name="lastName" 
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleChange}  
                  />
              </FormGroup>
            </Row>
          </div>
          <div className="singleRows">
            <Row>
              <FormGroup>
                <FormControl 
                  type="text" 
                  name="email" 
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}  
                  />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <FormControl 
                  type="password" 
                  name="password" 
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}  
                  />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <FormControl 
                  type="text" 
                  name="location" 
                  placeholder="City, State"
                  value={this.state.location}
                  onChange={this.handleChange}   
                  />
              </FormGroup>
            </Row>
          </div>
          <div className="signupButton"> 
            <input type="submit" value="SIGN UP"/>
          </div>
        </Form>
        <div className="errorMessage">{this.state.errorMessage}</div>
      </div>
    )
  }
}

export default SignupForm;
