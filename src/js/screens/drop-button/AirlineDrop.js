import React, { Component } from 'react';

import { Anchor, Box, Button, DropButton, Heading, Text } from 'grommet';
import { FormAdd, FormClose } from 'grommet-icons';

import MultiSelect from './MultiSelect';
import airlines from './airlines';

export default class AirlineDrop extends Component {
  state = {
    selectedAirlines: [],
    openAirline: false,
    availableAirlines: airlines,
  }

  filterAirlines = query => (
    this.setState({
      availableAirlines: this.getAirlines(undefined, query),
      openAirline: true,
    })
  );

  closeAirline = () => this.setState(
    { openAirline: false, availableAirlines: this.getAirlines() }
  );

  getAirlines = (selectedAirlines = this.state.selectedAirlines, query) => {
    let allAirlines = [...airlines];
    if (query) {
      allAirlines = allAirlines.filter(
        airline => airline.toLowerCase().match(query.toLowerCase())
      );
    }
    if (selectedAirlines.length) {
      allAirlines = allAirlines.filter(value => selectedAirlines.indexOf(value) === -1);
    }
    return allAirlines;
  }

  selectAirline = (airline) => {
    const newSelectedAirlines = [...this.state.selectedAirlines];
    newSelectedAirlines.push(airline);
    this.setState(
      {
        openAirline: false,
        selectedAirlines: newSelectedAirlines,
        availableAirlines: this.getAirlines(newSelectedAirlines),
      }
    );
  }

  removeAirline = (airlineIndex) => {
    const newSelectedAirlines = [...this.state.selectedAirlines];
    newSelectedAirlines.splice(airlineIndex, 1);
    this.setState(
      {
        openAirline: false,
        selectedAirlines: newSelectedAirlines,
        availableAirlines: this.getAirlines(newSelectedAirlines),
      }
    );
  }

  resetAirlines = (event) => {
    event.preventDefault();
    this.setState(
      {
        selectedAirlines: [],
        availableAirlines: this.getAirlines([]),
      }
    );
  }

  render() {
    const {
      availableAirlines,
      openAirline,
      selectedAirlines,
    } = this.state;
    let airlineNodes;
    if (selectedAirlines.length) {
      airlineNodes = (
        <Box pad={{ vertical: 'small' }}>
          {selectedAirlines.map((airline, index) => (
            <Box align='center' key={airline} direction='row' justify='between' pad={{ vertical: 'xsmall' }}>
              <Text margin={{ right: 'small' }}>{airline}</Text>
              <Button
                a11yTitle={`Delete ${airline}`}
                plain={true}
                onClick={() => this.removeAirline(index)}
              >
                <Box align='center'>
                  <FormClose />
                </Box>
              </Button>
            </Box>
          ))}
          <Box align='start' margin={{ vertical: 'small' }}>
            <Anchor href='#' onClick={this.resetAirlines}>
              Clear Airlines
            </Anchor>
          </Box>
        </Box>
      );
    }
    return (
      <Box basis='small'>
        <DropButton
          a11yTitle='Open Airlines drop'
          open={openAirline}
          onClose={this.closeAirline}
          control={
            <Box direction='row' justify='between'>
              <Heading level={4} margin='none'><strong>Airlines</strong></Heading>
              <FormAdd color='brand' />
            </Box>
          }
        >
          <MultiSelect
            category='Airline'
            onSearch={this.filterAirlines}
            onClose={this.closeAirline}
            items={availableAirlines}
            onSelect={this.selectAirline}
          />
        </DropButton>
        {airlineNodes}
      </Box>
    );
  }
}
