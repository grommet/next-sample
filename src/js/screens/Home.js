import React from 'react';
import PropTypes from 'prop-types';
import URLSearchParams from 'url-search-params';

import { Box, Grid, Grommet, Heading, Paragraph, RoutedButton, TextInput } from 'grommet';
import { hpe } from 'grommet/themes';

const THEMES = {
  grommet: undefined,
  hpe,
};

const Home = (props, context) => {
  const { router: { route: { location } } } = context;
  let theme;
  let suffix = '';
  if (location.search) {
    const params = new URLSearchParams(location.search);
    const themeName = params.get('theme');
    theme = THEMES[themeName];
    suffix = `?theme=${themeName}`;
  }
  return (
    <Grommet theme={theme}>
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
            {'it\'s'}
            a <RoutedButton path={`/box${suffix}`} label='Box' plain={true} /> in
            a <RoutedButton path={`/grid${suffix}`} label='Grid' plain={true} />
          </span>
        </Box>
        <Box gridArea='main' pad='medium' align='start'>
          <RoutedButton path={`/heading${suffix}`} box={true}>
            <Heading level={2} margin='none'>Heading</Heading>
          </RoutedButton>
          <RoutedButton path={`/paragraph${suffix}`} plain={true}>
            <Paragraph>Paragraph of text.</Paragraph>
          </RoutedButton>
          <RoutedButton path={`/button${suffix}`} label='Button' />
          <Box margin={{ vertical: 'medium' }}>
            <RoutedButton path={`/text-input${suffix}`} plain={true}>
              <TextInput placeholder='TextInput' />
            </RoutedButton>
          </Box>
        </Box>
      </Grid>
    </Grommet>
  );
};

Home.contextTypes = {
  router: PropTypes.any,
};

export default Home;
