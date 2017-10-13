import React, { Component } from 'react';

import { Box, DropButton } from 'grommet';
import doc from 'grommet/components/DropButton/doc';

import Doc from '../components/Doc';
import AirlineDrop from './drop-button/AirlineDrop';

const desc = doc(DropButton).toJSON();

export default class DropButtonDoc extends Component {
  render() {
    return (
      <Doc name='DropButton' desc={desc}>
        <Box pad='large'>
          <Box direction='row'>
            <AirlineDrop />
          </Box>
        </Box>
      </Doc>
    );
  }
}
