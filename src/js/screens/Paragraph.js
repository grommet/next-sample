import React from 'react';

import { Paragraph, Grommet, RoutedButton } from 'grommet';

const LOREM_IPSUM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export default () => (
  <div>
    <Grommet>
      <section>
        <h3>Default Paragraph</h3>
        <Paragraph>{LOREM_IPSUM}</Paragraph>
        <h3>Large Paragraph</h3>
        <Paragraph size='large'>{LOREM_IPSUM}</Paragraph>
        <h3>Small Paragraph</h3>
        <Paragraph size='small'>{LOREM_IPSUM}</Paragraph>
      </section>

      <RoutedButton plain={true} path='/'>
        Back to Home
      </RoutedButton>
    </Grommet>
  </div>
);
