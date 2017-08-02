import React, { Component } from 'react';
import PropTypes from 'prop-types';
import URLSearchParams from 'url-search-params';
import { hpe } from 'grommet/themes';
import { Box, Grommet } from 'grommet';

import Props from './Props';

const THEMES = {
  grommet: undefined,
  hpe,
};

export default class Doc extends Component {
  constructor(props, context) {
    super(props, context);
    this.onTheme = this.onTheme.bind(this);
    this.state = {};
    const { router: { route: { location } } } = this.context;
    if (location.search) {
      const params = new URLSearchParams(location.search);
      this.state.theme = params.get('theme');
    }
  }

  onTheme(theme) {
    const { router: { history, route: { location } } } = this.context;
    let loc = location.pathname;
    if (theme !== 'grommet') {
      loc += `?theme=${theme}`;
      this.setState({ theme });
    } else {
      this.setState({ theme: undefined });
    }
    history.replace(loc);
  }

  render() {
    const { children, component, name } = this.props;
    const { theme } = this.state;
    return (
      <Grommet theme={theme ? THEMES[theme] : undefined}>
        <Box direction='row' full='grow'>
          <Box flex='grow' direction='column'>
            {children}
          </Box>
          <Props
            name={name}
            component={component}
            themes={Object.keys(THEMES)}
            theme={theme}
            onTheme={this.onTheme}
          />
        </Box>
      </Grommet>
    );
  }
}

Doc.contextTypes = {
  router: PropTypes.any,
};
