import React from 'react';

import { Box, TextInput } from 'grommet';
import doc from 'grommet/components/text-input/doc';

import Doc from '../components/Doc';

doc(TextInput);

export default () => (
  <Doc name='TextInput' component={TextInput}>
    <Box pad='large'>
      <Box margin='small'>
        <TextInput id='item' name='item' />
      </Box>
      <Box margin='small'>
        <TextInput id='item' name='item' placeholder='placeholder' />
      </Box>
    </Box>
  </Doc>
);
