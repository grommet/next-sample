import React, { Component } from 'react';
import PropTypes from 'prop-types';
import URLSearchParams from 'url-search-params';
import { Router, Route, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import { Grommet } from 'grommet';
import { hpe } from 'grommet/themes';

import Box from './screens/Box';
import Button from './screens/Button';
import Chart from './screens/Chart';
import Heading from './screens/Heading';
import Home from './screens/Home';
import Grid from './screens/Grid';
import Layer from './screens/Layer';
import Markdown from './screens/Markdown';
import Meter from './screens/Meter';
import Paragraph from './screens/Paragraph';
import Stack from './screens/Stack';
import Text from './screens/Text';
import TextInput from './screens/TextInput';

const history = createBrowserHistory();

const THEMES = {
  grommet: undefined,
  hpe,
};

export default class App extends Component {
  static childContextTypes = {
    currentTheme: PropTypes.string,
    onThemeChange: PropTypes.func,
  };
  constructor(props, context) {
    super(props, context);
    this.onThemeChange = this.onThemeChange.bind(this);
    this.state = {};
    if (window.location.search) {
      const params = new URLSearchParams(window.location.search);
      this.state.theme = params.get('theme');
    }
  }

  getChildContext() {
    const { theme } = this.state;
    return {
      currentTheme: theme,
      onThemeChange: this.onThemeChange,
    };
  }

  componentDidUpdate() {
    const { theme } = this.state;
    if (this.unlisten) {
      this.unlisten = history.listen((location) => {
        if (!location.search && theme && theme !== 'grommet') {
          history.replace(`${window.location.pathname}?theme=${theme}`);
        }
      });
    }
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }

  onThemeChange(theme) {
    let loc = window.location.pathname;
    if (theme !== 'grommet') {
      loc += `?theme=${theme}`;
      this.setState({ theme });
    } else {
      this.setState({ theme: undefined });
    }
    history.replace(loc);
  }

  render() {
    const { theme } = this.state;
    return (
      <Router history={history}>
        <Grommet theme={theme ? THEMES[theme] : undefined}>
          <Switch>
            <Route exact={true} path='/' component={Home} />
            <Route exact={true} path='/box' component={Box} />
            <Route exact={true} path='/button' component={Button} />
            <Route exact={true} path='/chart' component={Chart} />
            <Route exact={true} path='/heading' component={Heading} />
            <Route exact={true} path='/grid' component={Grid} />
            <Route exact={true} path='/layer' component={Layer} />
            <Route exact={true} path='/markdown' component={Markdown} />
            <Route exact={true} path='/meter' component={Meter} />
            <Route exact={true} path='/paragraph' component={Paragraph} />
            <Route exact={true} path='/stack' component={Stack} />
            <Route exact={true} path='/text' component={Text} />
            <Route exact={true} path='/text-input' component={TextInput} />
          </Switch>
        </Grommet>
      </Router>
    );
  }
}
