import React, { Component } from 'react';
import { Box, Button, Responsive } from 'grommet';
import { LinkPrevious } from 'grommet-icons';

import Props from './Props';

export default class Doc extends Component {
  state = {
    narrow: false,
    showExamples: false,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onNarrow = (narrow) => {
    this.setState({ narrow });
  }

  render() {
    const { children, ...rest } = this.props;
    const { narrow, showExamples } = this.state;

    let props;
    if (!narrow || !showExamples) {
      props = (
        <Props
          {...rest}
          narrow={narrow}
          onExamples={narrow ?
            () => this.setState({ showExamples: true }) : undefined}
        />
      );
    }

    let examples;
    if (!narrow || showExamples) {
      let closeControl;
      if (narrow) {
        closeControl = (
          <Box direction='row' justify='start' pad={{ horizontal: 'small' }}>
            <Button
              icon={<LinkPrevious />}
              onClick={() => this.setState({ showExamples: false })}
            />
          </Box>
        );
      }
      examples = (
        <Box flex='grow' direction='column'>
          {closeControl}
          {children}
        </Box>
      );
    }

    return (
      <Responsive onNarrow={this.onNarrow}>
        <Box direction='row'>
          {props}
          {examples}
        </Box>
      </Responsive>
    );
  }
}
