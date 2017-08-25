import React from 'react';

import { Box, Markdown } from 'grommet';
import doc from 'grommet/components/markdown/doc';

import Doc from '../components/Doc';

doc(Markdown);

const CONTENT = `
# Heading 1

Paragraph

## Heading 2

### Heading 3

#### Heading 4
`;

export default () => (
  <Doc name='Markdown' component={Markdown}>
    <Box pad={{ horizontal: 'large' }}>
      <Markdown content={CONTENT} />
    </Box>
  </Doc>
);
