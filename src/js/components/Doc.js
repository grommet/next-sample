import React, { Component } from 'react';
import { Box, Button, Responsive } from 'grommet';
import { LinkPrevious } from 'grommet-icons';

import Props from './Props';

export default class Doc extends Component {
  state = {
    responsiveState: 'wide',
    showExamples: false,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onResponsiveChange = (responsiveState) => {
    this.setState({ responsiveState });
  }

  render() {
    const { children, ...rest } = this.props;
    const { responsiveState, showExamples } = this.state;

    let props;
    if (responsiveState !== 'narrow' || !showExamples) {
      props = (
        <Props
          {...rest}
          responsiveState={responsiveState}
          onExamples={responsiveState === 'narrow' ?
            () => this.setState({ showExamples: true }) : undefined}
        />
      );
    }

    let examples;
    if (responsiveState !== 'narrow' || showExamples) {
      let closeControl;
      if (responsiveState === 'narrow') {
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
      <Responsive onChange={this.onResponsiveChange}>
        <Box direction='row'>
          {props}
          {examples}
        </Box>
      </Responsive>
    );
  }
}
