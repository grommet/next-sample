import React from 'react';
import PropTypes from 'prop-types';
import URLSearchParams from 'url-search-params';

import {
  Box, Chart, Grid, Grommet, Heading, Markdown, Meter, Paragraph,
  RoutedButton, Stack, Text, TextInput,
} from 'grommet';
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

          <RoutedButton path={`/text${suffix}`} plain={true}>
            <Text>Text</Text>
          </RoutedButton>
          <RoutedButton path={`/markdown${suffix}`} plain={true}>
            <Markdown content='### Markdown' />
          </RoutedButton>
          <RoutedButton path={`/button${suffix}`} label='Button' />
          <Box margin={{ vertical: 'medium' }}>
            <RoutedButton path={`/text-input${suffix}`} plain={true}>
              <TextInput placeholder='TextInput' />
            </RoutedButton>
          </Box>
          <Box margin={{ vertical: 'medium' }}>
            <RoutedButton path={`/meter${suffix}`} plain={true}>
              <Box direction='row'>
                <Meter
                  title='Meter example'
                  values={[{ value: 60, label: 'sixty' }]}
                />
                <Text margin={{ horizontal: 'small' }}>Meter</Text>
              </Box>
            </RoutedButton>
          </Box>
          <Box margin={{ vertical: 'medium' }}>
            <RoutedButton path={`/chart${suffix}`} plain={true}>
              <Box direction='row'>
                <Chart
                  title='Chart example'
                  bounds={[[0, 7], [0, 100]]}
                  size={{ width: 'medium', height: 'xsmall' }}
                  values={[
                    { value: [7, 90], label: 'ninety' },
                    { value: [6, 80], label: 'eighty' },
                    { value: [5, 60], label: 'sixty' },
                    { value: [4, 70], label: 'seventy' },
                    { value: [3, 60], label: 'sixty' },
                    { value: [2, 40], label: 'forty' },
                    { value: [1, 30], label: 'thirty' },
                    { value: [0, 0], label: 'zero' },
                  ]}
                />
                <Text margin={{ horizontal: 'small' }}>Chart</Text>
              </Box>
            </RoutedButton>
          </Box>
          <Box margin={{ vertical: 'medium' }}>
            <RoutedButton path={`/stack${suffix}`} plain={true}>
              <Stack>
                <Box pad='large' background='light-2'>
                  <Heading level={3}>BASE</Heading>
                </Box>
                <Box margin='small' border='all'>
                  <Heading level={1} margin='none'>Stack</Heading>
                </Box>
              </Stack>
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
