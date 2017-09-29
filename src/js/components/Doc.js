import React, { Component } from 'react';
import { Box } from 'grommet';

import Props from './Props';

export default class Doc extends Component {
  render() {
    const { children, ...rest } = this.props;
    return (
      <Box direction='row' full='grow'>
        <Props {...rest} />
        <Box flex='grow' direction='column'>
          {children}
        </Box>
      </Box>
    );
  }
}
