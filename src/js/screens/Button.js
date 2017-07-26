import React from 'react';
import styled from 'styled-components';

import { Button, Grommet, RoutedButton } from 'grommet';
import { hpe } from 'grommet/themes';

const Container = styled.div`
  > * {
    margin-right: 12px;
    margin-bottom: 12px;
  }
`;

function onClick() {
  alert('hi');
}

export default () => (
  <div>
    <Grommet>
      <section>
        <h3>Default Buttons</h3>
        <Container>
          <Button label='Action' onClick={onClick} />
          <Button label='Action' primary={true} onClick={onClick} />
          <Button label='Action' secondary={true} onClick={onClick} />
          <Button label='Action' accent={true} onClick={onClick} />
          <Button label='Critical' critical={true} onClick={onClick} />
        </Container>
      </section>
    </Grommet>

    <Grommet theme={hpe}>
      <section>
        <h3>Default Buttons</h3>
        <Container>
          <Button label='Action' onClick={onClick} />
          <Button label='Action' primary={true} onClick={onClick} />
          <Button label='Action' secondary={true} onClick={onClick} />
          <Button label='Action' accent={true} onClick={onClick} />
          <Button label='Critical' critical={true} onClick={onClick} />
        </Container>
      </section>

      <RoutedButton plain={true} path='/'>
        Back to Home
      </RoutedButton>
    </Grommet>
  </div>
);
