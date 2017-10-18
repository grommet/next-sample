import React, { Component } from 'react';

import { Box, Select, Text } from 'grommet';
import { Amex, Mastercard, Visa, FormDown } from 'grommet-icons';
import doc from 'grommet/components/Select/doc';

import Doc from '../components/Doc';
import allAirlines from './data/airlines';

const desc = doc(Select).toJSON();

const stringOptions = ['small', 'medium', 'large', 'xlarge', 'huge'];
const creditCardOptions = [
  { type: 'visa', number: '4455', expires: '10/19', name: 'Paul Spencer' },
  { type: 'mastercard', number: '0143', expires: '08/20', name: 'Paul T Spencer David Aguela' },
  { type: 'amex', number: '8563', expires: '01/17', name: 'Paul S' },
];

const overflowStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

function getCardIcon(type) {
  let icon;
  if (type === 'amex') {
    icon = <Amex color='plain' />;
  } else if (type === 'mastercard') {
    icon = <Mastercard color='plain' />;
  } else if (type === 'visa') {
    icon = <Visa color='plain' />;
  }
  return icon;
}

function renderCreditCardValue(creditCard) {
  return (
    <Box align='center' direction='row' pad='small'>
      {getCardIcon(creditCard.type)}
      <Text margin={{ left: 'xsmall' }}>
        &#9679;&#9679;&#9679;&#9679;
      </Text>
      <Text margin={{ horizontal: 'xsmall' }}>
        <strong>{creditCard.number}</strong>
      </Text>
      <Text margin='none' color='light-6'>({creditCard.expires})</Text>
      <Text margin={{ horizontal: 'xsmall' }} style={overflowStyle}>
        {creditCard.name}
      </Text>
    </Box>
  );
}

export default class SelectDoc extends Component {
  state = {
    airline: '',
    airlines: allAirlines,
    creditCard: undefined,
    openAirlineDrop: false,
    size: '',
  }
  filterAirlines = query => (
    this.setState({
      airlines: allAirlines.filter(
        airline => airline.toLowerCase().match(query.toLowerCase())
      ),
      openAirlineDrop: true,
    })
  )
  renderCreditCardOption = (creditCardOption) => {
    if (!creditCardOption) {
      return <Box align='start' pad='small'>None</Box>;
    }
    const { creditCard = {} } = this.state;
    return (
      <Box
        align='center'
        direction='row'
        pad='small'
        background={creditCardOption.number === creditCard.number ? 'active' : undefined}
      >
        <Box
          a11yTitle={`${creditCardOption.type}, number: ${creditCardOption.number}`}
          direction='row'
          style={{ minWidth: '180px' }}
        >
          {getCardIcon(creditCardOption.type)}
          <Text margin={{ left: 'xsmall' }}>
            &#9679;&#9679;&#9679;&#9679;
          </Text>
          <Text margin={{ horizontal: 'xsmall' }}>
            <strong>{creditCardOption.number}</strong>
          </Text>
          <Text margin='none' color='light-6'>({creditCardOption.expires})</Text>
        </Box>
        <Text margin={{ horizontal: 'xsmall' }}>
          {creditCardOption.name}
        </Text>
      </Box>
    );
  }
  render() {
    const { airline, airlines, creditCard, openAirlineDrop, size } = this.state;
    return (
      <Doc name='Select' desc={desc}>
        <Box pad='large'>
          <Box direction='row'>
            <Box basis='small'>
              <Select
                a11yTitle='Open Size Select'
                placeholder='Select Size'
                options={stringOptions}
                value={size}
                onChange={({ option }) => this.setState({ size: option })}
              />
            </Box>
          </Box>
          <Box direction='row'>
            <Box direction='row' basis='medium' margin={{ top: 'small' }}>
              <Select
                a11yTitle='Open Credit Card Select'
                background='white'
                placeholder='Select Credit Card'
                options={[undefined].concat(creditCardOptions)}
                value={creditCard ? renderCreditCardValue(creditCard) : undefined}
                onChange={({ option }) => this.setState({ creditCard: option })}
              >
                {option => this.renderCreditCardOption(option)}
              </Select>
            </Box>
          </Box>
          <Box direction='row'>
            <Box direction='row' basis='medium' margin={{ top: 'small' }}>
              <Select
                a11yTitle='Open Airline Select'
                basis='medium'
                placeholder='Select Airline'
                searchPlaceholder='Filter Airline'
                options={airlines}
                value={airline}
                onChange={
                  ({ option }) => this.setState({
                    airlines: allAirlines, airline: option, openAirlineDrop: false,
                  })
                }
                onClose={
                  () => this.setState({
                    airlines: allAirlines, openAirlineDrop: false,
                  })
                }
                onSearch={this.filterAirlines}
                open={openAirlineDrop}
              />
            </Box>
          </Box>
        </Box>
      </Doc>
    );
  }
}
