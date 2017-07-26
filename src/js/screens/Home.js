import React from 'react';

import { Grommet, RoutedButton } from 'grommet';

export default () => (
  <Grommet>
    <h1>Welcome to Grommet 2.0</h1>

    <h2>Components</h2>

    <section>
      <h3>Button</h3>
      <RoutedButton label='See all buttons' path='/button' />
    </section>
  </Grommet>
);
