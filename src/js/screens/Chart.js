import React from 'react';

import { Box, Chart, Stack, Text } from 'grommet';
import doc from 'grommet/components/Chart/doc';

import Doc from '../components/Doc';

doc(Chart);

const BOUNDS = [[0, 7], [0, 100]];

const VALUES = [
  { value: [7, 90], label: 'ninety' },
  { value: [6, 70], label: 'seventy' },
  { value: [5, 60], label: 'sixty' },
  { value: [4, 80], label: 'eighty' },
  { value: [3, 40], label: 'forty' },
  { value: [2, 30], label: 'thirty' },
  { value: [1, 60], label: 'sixty' },
  { value: [0, 0], label: 'zero' },
];

const REVERSE_VALUES =
  VALUES.map((v, i) => ({ ...v, value: [i, v.value[1]] }));

export default () => (
  <Doc name='Chart' component={Chart}>
    <Box pad='large'>
      <Box margin={{ vertical: 'medium' }}>
        <Chart
          bounds={BOUNDS}
          values={VALUES}
          size={{ width: 'medium', height: 'xsmall' }}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Chart
          bounds={BOUNDS}
          values={VALUES}
          size={{ width: 'medium', height: 'xsmall' }}
          type='line'
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Chart
          bounds={BOUNDS}
          values={VALUES}
          size={{ width: 'medium', height: 'xsmall' }}
          type='area'
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Chart
          bounds={BOUNDS}
          values={VALUES}
          size={{ width: 'medium', height: 'xsmall' }}
          round={true}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Chart
          bounds={BOUNDS}
          values={VALUES}
          size={{ width: 'medium', height: 'xsmall' }}
          type='line'
          round={true}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Chart
          bounds={BOUNDS}
          values={VALUES}
          size={{ width: 'medium', height: 'xsmall' }}
          type='area'
          round={true}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Chart
          bounds={BOUNDS}
          values={VALUES}
          size={{ width: 'xsmall', height: 'xxsmall' }}
          thickness='xsmall'
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Chart
          bounds={BOUNDS}
          values={VALUES}
          size={{ width: 'small', height: 'xxsmall' }}
          thickness='small'
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Chart
          bounds={BOUNDS}
          values={VALUES}
          size={{ width: 'xlarge', height: 'medium' }}
          thickness='xlarge'
        />
      </Box>
      <Box margin={{ vertical: 'medium' }} alignSelf='start'>
        <Stack>
          <Chart
            bounds={BOUNDS}
            values={VALUES}
            size={{ width: 'medium', height: 'xsmall' }}
            type='area'
            round={true}
          />
          <Chart
            bounds={BOUNDS}
            values={REVERSE_VALUES}
            size={{ width: 'medium', height: 'xsmall' }}
            color='accent-2'
            type='line'
            round={true}
            thickness='small'
          />
        </Stack>
        <Box direction='row' responsive={false} justify='between'>
          <Text>then</Text>
          <Text>now</Text>
        </Box>
      </Box>
    </Box>
  </Doc>
);
