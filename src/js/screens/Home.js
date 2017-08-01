import React from 'react';

import { Grommet, RoutedButton } from 'grommet';

export default () => (
  <Grommet>
    <h1>Welcome to Grommet 2.0</h1>

    <h2>Components</h2>

    <section>
      <RoutedButton label='Button' path='/button' plain={true} />
    </section>
    <section>
      <RoutedButton label='Box' path='/box' plain={true} />
    </section>
    <section>
      <RoutedButton label='Heading' path='/heading' plain={true} />
    </section>
    <section>
      <RoutedButton label='Grid' path='/grid' plain={true} />
    </section>
    <section>
      <RoutedButton label='Paragraph' path='/paragraph' plain={true} />
    </section>
    <section>
      <RoutedButton label='Text Input' path='/text-input' plain={true} />
    </section>
  </Grommet>
);
