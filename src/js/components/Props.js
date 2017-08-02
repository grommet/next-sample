import React, { Component } from 'react';
import { getDocAsJSON } from 'react-desc';

import { Box, Heading, Paragraph, RoutedButton } from 'grommet';

export default class Props extends Component {
  constructor(props) {
    super(props);
    this.state = getDocAsJSON(props.component);
  }

  renderValues(values) {
    let result;
    if (Array.isArray(values)) {
      result = values.map(v => this.renderValues(v));
    } else {
      result = <span key={values}>{values}</span>;
    }
    return result;
  }

  render() {
    const { description, properties } = this.state;
    const { name } = this.props;

    const props = properties.map(property => (
      <Box key={property.name}>
        <Heading level={3} size='small'>
          <strong>{property.name}</strong>
        </Heading>
        <Paragraph>{property.description}</Paragraph>
        {this.renderValues(property.format)}
      </Box>
    ));

    return (
      <Box basis='medium' background='light-1'>
        <Box
          basis='xsmall'
          direction='row'
          justify='between'
          align='center'
        >
          <RoutedButton path='/' plain={true} >
            <svg width='96px' height='96px' viewBox='0 0 96 96' version='1.1'>
              <g fill='none' fillRule='evenodd'>
                <polygon stroke='#333333' strokeWidth='3' points='11.5 69 69 11.5 11.5 11.5' />
              </g>
            </svg>
          </RoutedButton>
          <Box direction='row' align='center' pad='medium'>
            <Heading margin='none'>{name}</Heading>
          </Box>
        </Box>
        <Box pad='medium'>
          <Paragraph>
            {description}
          </Paragraph>
          {props}
        </Box>
      </Box>
    );
  }
}
