import React from 'react';

import { Box, Grid, Grommet, RoutedButton } from 'grommet';

export default () => (
  <Grommet>
    <h1>Grid</h1>
    <Grid
      rows={['xxsmall', 'medium', 'xsmall']}
      columns={['3/4', '1/4']}
      areas={[
        { name: 'header', start: [0, 0], end: [0, 1] },
        { name: 'main', start: [1, 0], end: [1, 0] },
        { name: 'sidebar', start: [1, 1], end: [1, 1] },
        { name: 'footer', start: [2, 0], end: [2, 1] },
      ]}
      gap='small'
    >
      <Box
        align='center'
        justify='center'
        pad='medium'
        background='neutral-1'
        gridArea='header'
      >
        Header
      </Box>
      <Box
        align='center'
        justify='center'
        pad='medium'
        background='light-1'
        gridArea='main'
      >
        Main
      </Box>
      <Box
        align='center'
        justify='center'
        pad='medium'
        background='light-2'
        gridArea='sidebar'
      >
        Sidebar
      </Box>
      <Box
        align='center'
        justify='center'
        pad='medium'
        background='dark-1'
        gridArea='footer'
      >
        Footer
      </Box>
    </Grid>

    <RoutedButton plain={true} path='/'>
      Back to Home
    </RoutedButton>
  </Grommet>
);
