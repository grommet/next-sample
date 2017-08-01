import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Box from './screens/Box';
import Button from './screens/Button';
import Heading from './screens/Heading';
import Home from './screens/Home';
import Grid from './screens/Grid';
import Paragraph from './screens/Paragraph';

export default class BasicApp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path='/' component={Home} />
          <Route exact={true} path='/box' component={Box} />
          <Route exact={true} path='/button' component={Button} />
          <Route exact={true} path='/heading' component={Heading} />
          <Route exact={true} path='/grid' component={Grid} />
          <Route exact={true} path='/paragraph' component={Paragraph} />
        </div>
      </Router>
    );
  }
}
