import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/"><HomeContainer /></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;