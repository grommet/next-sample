import React from 'react';

import { Box } from 'grommet';
import doc from 'grommet/components/box/doc';

import Doc from '../components/Doc';

doc(Box);

export default () => (
  <Doc name='Box' component={Box}>
    <Box pad='large' background='neutral-1'>
      <Box pad='medium'>Plain sub-box</Box>
      <Box pad='medium' background='light-2'>Background color</Box>
      <Box
        pad='medium'
        background={{
          image: 'url(https://grommet.github.io/img/carousel-2.png)',
          dark: false,
        }}
      >Image background</Box>
    </Box>
  </Doc>
);
