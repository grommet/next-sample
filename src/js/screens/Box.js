import React from 'react';

import { Box, Grommet, RoutedButton } from 'grommet';

export default () => (
  <div>
    <Grommet>
      <section>
        <h3>Default Box</h3>
        <Box>
          <div>A</div><div>B</div><div>C</div>
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
