import React from 'react';

import { Box, Meter, Stack, Text } from 'grommet';
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
          round={true}
          size='xsmall'
          thickness='xsmall'
          values={MULTIPLE_VALUES}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Meter
          round={true}
          size='small'
          thickness='small'
          values={MULTIPLE_VALUES}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Meter
          round={true}
          size='large'
          thickness='large'
          values={MULTIPLE_VALUES}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Meter
          round={true}
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
          round={true}
          values={MULTIPLE_VALUES}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Meter
          type='circle'
          round={true}
          size='xsmall'
          thickness='xsmall'
          values={MULTIPLE_VALUES}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Meter
          type='circle'
          round={true}
          size='small'
          thickness='small'
          values={MULTIPLE_VALUES}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Meter
          type='circle'
          round={true}
          size='large'
          thickness='large'
          values={MULTIPLE_VALUES}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Meter
          type='circle'
          round={true}
          size='xlarge'
          thickness='xlarge'
          values={MULTIPLE_VALUES}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Meter
          type='circle'
          round={true}
          size='full'
          values={MULTIPLE_VALUES}
        />
      </Box>
      <Box margin={{ vertical: 'medium' }} alignSelf='start'>
        <Meter
          round={true}
          size='medium'
          values={MULTIPLE_VALUES}
        />
        <Box direction='row' responsive={false} justify='between'>
          <Text>0</Text>
          <Text>100</Text>
        </Box>
      </Box>
      <Box margin={{ vertical: 'medium' }} alignSelf='start'>
        <Stack>
          <Meter
            type='circle'
            round={true}
            size='medium'
            values={MULTIPLE_VALUES}
          />
          <Box justify='center' align='center'>
            <Text size='xxlarge'>60</Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  </Doc>
);
