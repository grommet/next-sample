import React from 'react';

import { Box, Grid, Grommet, Heading, Paragraph, RoutedButton, TextInput } from 'grommet';

export default () => (
  <Grommet>
    <Grid
      rows={['xsmall', 'flex']}
      columns={['flex']}
      areas={[
        { name: 'header', start: [0, 0], end: [0, 0] },
        { name: 'main', start: [0, 1], end: [0, 1] },
      ]}
    >
      <Box
        gridArea='header'
        direction='row'
        justify='between'
        align='center'
        background='brand'
        pad={{ horizontal: 'medium' }}
      >
        <Heading margin='none'>Grommet 2.0</Heading>
        <span>
          {'it\'s'} a <RoutedButton path='/box' label='Box' plain={true} /> in
          a <RoutedButton path='/grid' label='Grid' plain={true} />
        </span>
      </Box>
      <Box gridArea='main' pad='medium' align='start'>
        <RoutedButton path='/heading' box={true}>
          <Heading level={2} margin='none'>Heading</Heading>
        </RoutedButton>
        <RoutedButton path='/paragraph' plain={true}>
          <Paragraph>Paragraph of text.</Paragraph>
        </RoutedButton>
        <RoutedButton path='/button' label='Button' />
        <Box margin={{ vertical: 'medium' }}>
          <RoutedButton path='/text-input' plain={true}>
            <TextInput placeholder='TextInput' />
          </RoutedButton>
        </Box>
      </Box>
    </Grid>
  </Grommet>
);
