import React, { Component } from 'react';
import { Box } from 'grommet';

import Props from './Props';

export default class Doc extends Component {
  render() {
    const { children, component, name } = this.props;
    return (
      <Box direction='row' full='grow'>
        <Box flex='grow' direction='column'>
          {children}
        </Box>
        <Props name={name} component={component} />
      </Box>
    );
  }
}
