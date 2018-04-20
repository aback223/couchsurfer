import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
