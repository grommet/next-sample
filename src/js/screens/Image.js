import React from 'react';

import { Box, Image } from 'grommet';
import doc from 'grommet/components/Image/doc';

import Doc from '../components/Doc';

doc(Image);

const SRC = 'http://www.seafordcinema.org/wp-content/uploads/2016/11/hunt-for-the-wilderpeople-1.jpg';

export default () => (
  <Doc name='Image' component={Image}>
    <Box pad='large'>
      <Box border='all' align='center'>
        <Image src={SRC} />
      </Box>
      <Box basis='small' border='all'>
        <Image fit='contain' src={SRC} />
      </Box>
      <Box basis='medium' border='all'>
        <Image fit='cover' src={SRC} />
      </Box>
    </Box>
  </Doc>
);
