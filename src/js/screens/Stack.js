import React from 'react';

import { Box, Stack, Heading } from 'grommet';
import doc from 'grommet/components/Stack/doc';

import Doc from '../components/Doc';

doc(Stack);

export default () => (
  <Doc name='Stack' component={Stack}>
    <Box pad='large'>
      <Stack>
        <Box pad='large' background='light-2'>
          <Heading level={3}>BASE</Heading>
        </Box>
        <Box pad='small' background='light-3' justify='center' align='center'>
          <Heading level={2} margin='none'>Stack - center</Heading>
        </Box>
      </Stack>
    </Box>
    <Box pad='large'>
      <Stack anchor='top-right'>
        <Box pad='large' background='light-2'>
          <Heading level={3}>BASE</Heading>
        </Box>
        <Box margin='none' pad='small' background='light-3' justify='center' align='center'>
          <Heading level={2} margin='none'>Stack - top-right</Heading>
        </Box>
      </Stack>
    </Box>
  </Doc>
);
