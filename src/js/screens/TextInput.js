import React, { Component } from 'react';

import { Box, TextInput } from 'grommet';
import doc from 'grommet/components/TextInput/doc';

import Doc from '../components/Doc';

doc(TextInput);

const allSuggestions = ['alan', 'bryan', 'chris', 'david', 'eric', 'tracy'];

class TextInputDoc extends Component {
  state = {
    value: '',
    suggestions: allSuggestions,
  }
  render() {
    const { suggestions, value } = this.state;
    return (
      <Doc name='TextInput' component={TextInput}>
        <Box pad='large'>
          <Box margin='small'>
            <TextInput id='item' name='item' />
          </Box>
          <Box margin='small'>
            <TextInput id='item2' name='item2' placeholder='placeholder' />
          </Box>
          <Box margin='small'>
            <TextInput
              id='item3'
              name='item3'
              placeholder='suggestions'
              suggestions={suggestions}
              onSelect={
                ({ suggestion }) => this.setState({ value: suggestion })
              }
              onDOMChange={event => this.setState({
                value: event.target.value,
                suggestions: allSuggestions.filter(
                  suggestion => suggestion.indexOf(event.target.value) > -1
                ),
              })}
              value={value}
            />
          </Box>
        </Box>
      </Doc>
    );
  }
}

export default TextInputDoc;
