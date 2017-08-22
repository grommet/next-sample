import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Box from './screens/Box';
import Button from './screens/Button';
import Heading from './screens/Heading';
import Home from './screens/Home';
import Grid from './screens/Grid';
import Paragraph from './screens/Paragraph';
import Stack from './screens/Stack';
import TextInput from './screens/TextInput';

export default class BasicApp extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route exact={true} path='/box' component={Box} />
          <Route exact={true} path='/button' component={Button} />
          <Route exact={true} path='/heading' component={Heading} />
          <Route exact={true} path='/grid' component={Grid} />
          <Route exact={true} path='/paragraph' component={Paragraph} />
          <Route exact={true} path='/stack' component={Stack} />
          <Route exact={true} path='/text-input' component={TextInput} />
        </Switch>
      </Router>
    );
  }
}
