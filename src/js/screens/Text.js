import React from 'react';

import { Box, Text } from 'grommet';
import doc from 'grommet/components/Text/doc';

import Doc from '../components/Doc';

doc(Text);

export default () => (
  <Doc name='Text' component={Text}>
    <Box pad='large'>
      <Text size='xsmall'>Text XSmall</Text>
      <Text size='small'>Text Small</Text>
      <Text size='medium'>Text Medium</Text>
      <Text size='large'>Text Large</Text>
      <Text size='xlarge'>Text XLarge</Text>
      <Text size='xxlarge'>Text XXLarge</Text>
      <Text color='status-critical'>status-critical</Text>
    </Box>
  </Doc>
);
