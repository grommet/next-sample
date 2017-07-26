import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './screens/Home';
import Button from './screens/Button';

export default class BasicApp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path='/' component={Home} />
          <Route exact={true} path='/button' component={Button} />
        </div>
      </Router>
    );
  }
}
