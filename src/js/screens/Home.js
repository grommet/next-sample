import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Anchor, Box, Button, Chart, Grid, Heading, Image, Markdown, Menu, Meter, Paragraph,
  RoutedButton, Stack, Text, TextInput,
} from 'grommet';

const CHART_VALUES = [
  { value: [7, 90], label: 'ninety' },
  { value: [6, 80], label: 'eighty' },
  { value: [5, 60], label: 'sixty' },
  { value: [4, 70], label: 'seventy' },
  { value: [3, 60], label: 'sixty' },
  { value: [2, 40], label: 'forty' },
  { value: [1, 30], label: 'thirty' },
  { value: [0, 0], label: 'zero' },
];

export default class Home extends Component {
  state = {}
  selectColor(color) {
    return (event) => {
      event.stopPropagation();
      this.setState({
        activeColor: (color === this.state.activeColor ? undefined : color),
      });
    };
  }

  render() {
    const { activeColor } = this.state;

    return (
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
            a <RoutedButton path='/box' label='Box' plain={true} /> in
            a <RoutedButton path='/grid' label='Grid' plain={true} />
          </span>
        </Box>
        <Box gridArea='main' direction='row' wrap={true} pad='small'>

          <Box align='start' pad='small' basis='medium'>
            <RoutedButton path='/heading' box={true}>
              <Heading level={2} margin='none'>Heading</Heading>
            </RoutedButton>
            <RoutedButton path='/paragraph' plain={true}>
              <Paragraph>Paragraph of text.</Paragraph>
            </RoutedButton>

            <RoutedButton path='/text' plain={true}>
              <Text>Text</Text>
            </RoutedButton>
            <RoutedButton path='/markdown' plain={true}>
              <Markdown content='### Markdown' />
            </RoutedButton>
          </Box>

          <Box align='start' pad='small' basis='medium'>
            <Box margin={{ bottom: 'small' }}>
              <RoutedButton path='/button' label='Button' />
            </Box>
            <Box margin={{ vertical: 'small' }}>
              <RoutedButton path='/anchor' plain={true}>
                <Anchor tabIndex='-1' primary={true} label='Anchor' />
              </RoutedButton>
            </Box>
            <Box margin={{ vertical: 'small' }}>
              <RoutedButton path='/text-input' plain={true}>
                <TextInput placeholder='TextInput' disabled={true} />
              </RoutedButton>
            </Box>
            <Box margin={{ vertical: 'small' }}>
              <RoutedButton path='/menu' plain={true}>
                <Menu
                  tabIndex='-1'
                  label='Menu'
                  items={[]}
                />
              </RoutedButton>
            </Box>
            <Box margin={{ vertical: 'small' }}>
              <RoutedButton path='/layer'>
                <Box direction='row'>
                  <Box
                    background='dark-5'
                    pad={{ horizontal: 'large', vertical: 'small' }}
                  >
                    -
                  </Box>
                  <Box
                    border='all'
                    basis='medium'
                    pad={{ horizontal: 'medium', vertical: 'small' }}
                  >
                    Layer
                  </Box>
                </Box>
              </RoutedButton>
            </Box>
          </Box>

          <Box basis='medium'>
            <Box margin='small'>
              <RoutedButton path='/meter' plain={true}>
                <Stack anchor='top-right'>
                  <Meter
                    title='Meter example'
                    values={[{ value: 60, label: 'sixty' }]}
                  />
                  <Text margin={{ horizontal: 'small' }}>Meter</Text>
                </Stack>
              </RoutedButton>
            </Box>
            <Box margin='small'>
              <RoutedButton path='/chart' plain={true}>
                <Stack anchor='top-left'>
                  <Chart
                    title='Chart example'
                    bounds={[[0, 7], [0, 100]]}
                    size={{ width: 'medium', height: 'xsmall' }}
                    values={CHART_VALUES}
                  />
                  <Text>Chart</Text>
                </Stack>
              </RoutedButton>
            </Box>
            <Box margin='small'>
              <RoutedButton path='/stack' plain={true}>
                <Stack>
                  <Box pad='large'>
                    <Heading level={3} margin='none' textAlign='center'>
                      Stack
                    </Heading>
                  </Box>
                  <Box
                    pad={{ top: 'medium', left: 'small', right: 'small' }}
                    border={{ color: 'light-4' }}
                  >
                    <Heading level={2} margin='small'>Stack</Heading>
                  </Box>
                </Stack>
              </RoutedButton>
            </Box>
          </Box>

          <Box basis='medium'>
            <Box margin='small'>
              <RoutedButton path='/image' plain={true}>
                <Box align='center'>
                  <Box basis='small'>
                    <Image
                      fit='contain'
                      src='http://www.seafordcinema.org/wp-content/uploads/2016/11/hunt-for-the-wilderpeople-1.jpg'
                    />
                  </Box>
                  <Text margin={{ horizontal: 'small' }}>Image</Text>
                </Box>
              </RoutedButton>
            </Box>
          </Box>

          <Box
            direction='row'
            basis='full'
            wrap={true}
            margin={{ top: 'large' }}
            pad={{ horizontal: 'small' }}
          >
            {['brand', 'accent-1', 'accent-2',
              'neutral-1', 'neutral-2', 'neutral-3',
              'light-1', 'light-2', 'light-3', 'light-4', 'light-5',
              'dark-1', 'dark-2', 'dark-3', 'dark-4', 'dark-5',
              'status-ok', 'status-warning', 'status-critical',
              'status-disabled',
            ].map(color => (
              <Box key={color} flex='grow'>
                <Button a11yTitle={`${color} color`} onClick={this.selectColor(color)}>
                  <Box background={color} pad='small'>
                    {activeColor === color ? color : ''}
                  </Box>
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
    );
  }
}

Home.contextTypes = {
  router: PropTypes.any,
};
