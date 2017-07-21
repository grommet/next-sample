import React, { Component } from 'react';

import { Grommet, Button } from 'grommet';
import { hpe } from 'grommet/themes';

export default class BasicApp extends Component {
  render() {
    return (
      <div>
        <Grommet>
          <h1>Basic Theme</h1>
          <Button label='hi' onClick={() => alert('hi')} />
        </Grommet>
        <Grommet theme={hpe}>
          <h1>HPE Theme</h1>
          <Button label='hi' onClick={() => alert('hi')} />
        </Grommet>
      </div>
    );
  }
}
