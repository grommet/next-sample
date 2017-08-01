import React from 'react';
import styled from 'styled-components';

import { Grommet, RoutedButton, TextInput } from 'grommet';

const Container = styled.div`
  > * {
    margin-right: 12px;
    margin-bottom: 12px;
  }
`;

export default () => (
  <div>
    <Grommet>
      <section>
        <h3>Default TextInput</h3>
        <Container>
          <TextInput id='item' name='item' />
          <TextInput id='item' name='item' placeholder='Search' />
        </Container>
      </section>

      <RoutedButton plain={true} path='/'>
        Back to Home
      </RoutedButton>
    </Grommet>
  </div>
);
