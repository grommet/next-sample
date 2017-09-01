import React, { Component } from 'react';

import { Box, Button, Heading, Layer, Text, TextInput } from 'grommet';
import doc from 'grommet/components/layer/doc';

import Doc from '../components/Doc';

doc(Layer);

const closeIcon = (
  <svg
    version='1.1'
    viewBox='0 0 24 24'
    width='24px'
    height='24px'
    role='img'
  >
    <path
      fill='none'
      stroke='#333'
      strokeWidth='2'
      d='M3,3 L21,21 M3,21 L21,3'
    />
  </svg>
);

export default class LayerDoc extends Component {
  state = {
    align: undefined,
    showConfirmLayer: false,
    showFormLayer: false,
  }
  render() {
    const {
      align,
      showConfirmLayer,
      showFormLayer,
    } = this.state;
    let layerNode;
    if (showConfirmLayer) {
      const close = () => this.setState({ showConfirmLayer: false });
      layerNode = (
        <Layer align={align} onEsc={close}>
          <Box pad={{ horizontal: 'medium' }}>
            <Heading level='2' margin='medium'>Confirm</Heading>
            <Text>
              Are you sure you want to close this layer?
            </Text>
            <Box align='start' margin={{ vertical: 'medium' }}>
              <Button primary={true} label='Sure, close it' onClick={close} />
            </Box>
          </Box>
        </Layer>
      );
    } else if (showFormLayer) {
      const close = () => this.setState({ showFormLayer: false });
      layerNode = (
        <Layer align={align} onEsc={close} size='medium'>
          <Box pad='medium'>
            <Box align='end'>
              <Button icon={closeIcon} onClick={close} />
            </Box>
            <Heading level='3' margin='none'>
              <strong>Form</strong>
            </Heading>
            <Box pad={{ vertical: 'medium' }}>
              <TextInput />
            </Box>
          </Box>
        </Layer>
      );
    }
    return (
      <Doc name='Layer' component={Layer}>
        <Box pad='large' align='start'>
          <Box margin='small'>
            <Button
              label='Confirm center'
              onClick={() => this.setState({ showConfirmLayer: true })}
              primary={true}
            />
          </Box>
          <Box margin='small'>
            <Button
              label='Confirm top'
              onClick={() => this.setState({ showConfirmLayer: true, align: 'top' })}
              primary={true}
            />
          </Box>
          <Box margin='small'>
            <Button
              label='Form left'
              onClick={() => this.setState({ showFormLayer: true, align: 'left' })}
            />
          </Box>
          <Box margin='small'>
            <Button
              label='Form right'
              onClick={() => this.setState({ showFormLayer: true, align: 'right' })}
            />
          </Box>
        </Box>
        {layerNode}
      </Doc>
    );
  }
}
