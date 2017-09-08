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
            <TextInput />
          </Box>
          <Box margin='small'>
            <TextInput placeholder='placeholder' />
          </Box>
          <Box margin='small'>
            <TextInput
              placeholder='suggestions'
              suggestions={suggestions}
              onSelect={
                ({ suggestion }) => this.setState({ value: suggestion })
              }
              onInput={event => this.setState({
                value: event.target.value,
                suggestions: allSuggestions.filter(
                  suggestion => suggestion.indexOf(event.target.value) > -1
                ),
              })}
              value={value}
            />
          </Box>
          <Box margin='small'>
            <TextInput placeholder='search' type='search' />
          </Box>
          <Box margin='small'>
            <TextInput placeholder='password' type='password' />
          </Box>
          <Box margin='small'>
            <TextInput placeholder='email' type='email' />
          </Box>
          <Box margin='small'>
            <TextInput placeholder='tel' type='tel' />
          </Box>
          <Box margin='small'>
            <TextInput placeholder='url' type='url' />
          </Box>
          <Box margin='small'>
            <TextInput placeholder='date' type='url' />
          </Box>
        </Box>
      </Doc>
    );
  }
}

export default TextInputDoc;
