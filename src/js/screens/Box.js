import React from 'react';

import { Box, Grommet, RoutedButton } from 'grommet';

export default () => (
  <div>
    <Grommet>
      <section>
        <h3>Default Box</h3>
        <Box pad='medium' background='neutral-1'>
          <Box pad='medium'>A</Box>
          <Box pad='large' background='light-2'>B</Box>
          <Box
            pad='medium'
            background={{
              image: 'url(https://grommet.github.io/img/carousel-2.png)',
              dark: false,
            }}
          >C</Box>
        </Box>

        <h3>Row Box</h3>
        <Box direction='row' align='center' justify='center'>
          <div>A</div><div>B</div><div>C</div>
        </Box>
      </section>

      <RoutedButton plain={true} path='/'>
        Back to Home
      </RoutedButton>
    </Grommet>
  </div>
);
