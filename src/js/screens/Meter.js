import React from 'react';

import { Box, Meter, Stack, Heading } from 'grommet';
import doc from 'grommet/components/meter/doc';

import Doc from '../components/Doc';

doc(Meter);

const SINGLE_VALUE = [
  { value: 60, label: 'sixty', onClick: () => alert('60') },
];
const MULTIPLE_VALUES = [
  { value: 60, label: 'sixty', onClick: () => alert('60') },
  { value: 10, label: 'ten', onClick: () => alert('10') },
];

export default () => (
  <Doc name='Meter' component={Meter}>
    <Box pad='large'>
      <Box margin={{ vertical: 'medium' }}>
        <Meter values={SINGLE_VALUE} />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Meter values={MULTIPLE_VALUES} />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Meter
          cap='round'
          size='xsmall'
          thickness='xsmall'
          values={MULTIPLE_VALUES}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Meter
          cap='round'
          size='small'
          thickness='small'
          values={MULTIPLE_VALUES}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Meter
          cap='round'
          size='large'
          thickness='large'
          values={MULTIPLE_VALUES}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Meter
          cap='round'
          size='xlarge'
          thickness='xlarge'
          values={MULTIPLE_VALUES}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Meter
          size='full'
          values={MULTIPLE_VALUES}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Meter type='circle' values={SINGLE_VALUE} />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Meter
          type='circle'
          values={MULTIPLE_VALUES}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Meter
          type='circle'
          cap='round'
          values={MULTIPLE_VALUES}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Meter
          type='circle'
          cap='round'
          size='xsmall'
          thickness='xsmall'
          values={MULTIPLE_VALUES}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Meter
          type='circle'
          cap='round'
          size='small'
          thickness='small'
          values={MULTIPLE_VALUES}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Meter
          type='circle'
          cap='round'
          size='large'
          thickness='large'
          values={MULTIPLE_VALUES}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Meter
          type='circle'
          cap='round'
          size='xlarge'
          thickness='xlarge'
          values={MULTIPLE_VALUES}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Meter
          type='circle'
          cap='round'
          size='full'
          values={MULTIPLE_VALUES}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }} alignSelf='start'>
        <Stack>
          <Meter
            type='circle'
            cap='round'
            size='medium'
            values={MULTIPLE_VALUES}
          />
          <Box justify='center' align='center'>
            <Heading tag='h2' strong={true}>60</Heading>
          </Box>
        </Stack>
      </Box>
    </Box>
  </Doc>
);
